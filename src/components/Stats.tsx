"use client";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const tripsOptions = {
  title: "Días de la semana con más viajes:",
  hAxis: {
    title: "Viajes",
  },
  vAxis: {
    title: "Día",
  },
  colors: ["#CD25B3"],
};

const moneyOptions = {
  title: "Dinero histórico gastado",
  vAxis: {
    title: "Dinero",
  },
  colors: ["#F10B60"],
};

const driverMoneyOptions = {
  title: "Dinero esperado último viaje",
  vAxis: {
    title: "Dinero",
  },
  colors: ["#F10B60"],
};

const moneyPerDayOptions = {
  title: "Dinero histórico gastado por día de la semana",
  hAxis: {
    title: "Día",
  },
  vAxis: {
    title: "Dinero",
  },
};

const passangersOptions = {
  title: "Pasajeros del último viaje",
  hAxis: {
    title: "Viaje",
  },
  vAxis: {
    title: "Pasajeros",
  },
};

export default function Stats() {
  const [user, setUser] = useState<any>({});
  const [viajes, setViajes] = useState<any[]>([]);
  const requestedRides = viajes.filter(
    (viaje) => user && viaje.users?.includes(user.id)
  );
  const driverRide = viajes.find((ride) => ride.id === user.id);
  const tripsPerDay = requestedRides.reduce((acc, ride) => {
    const date = new Date(ride.date);
    const day = date.toLocaleDateString("es-ES", { weekday: "long" });
    if (acc[day]) {
      acc[day] += 1;
    } else {
      acc[day] = 1;
    }
    return acc;
  }, {});
  const tripsData = [
    ["Día", "Viajes"],
    ["Lunes", tripsPerDay["lunes"] || 0],
    ["Martes", tripsPerDay["martes"] || 0],
    ["Miércoles", tripsPerDay["miércoles"] || 0],
    ["Jueves", tripsPerDay["jueves"] || 0],
    ["Viernes", tripsPerDay["viernes"] || 0],
  ];
  const moneyRaised = requestedRides.reduce((acc, ride) => {
    acc += Number(ride.money);
    return acc;
  }, 0);
  const moneyData = [
    ["Label", "Dinero gastado"],
    ["Dinero gastado", moneyRaised],
  ];
  const moneyPerDay = requestedRides.reduce((acc, ride) => {
    const date = new Date(ride.date);
    const day = date.toLocaleDateString("es-ES", { weekday: "long" });
    if (acc[day]) {
      acc[day] += Number(ride.money);
    } else {
      acc[day] = Number(ride.money);
    }
    return acc;
  }, {});
  const moneyPerDayData = [
    ["Día", "Dinero gastado"],
    ["Lunes", moneyPerDay["lunes"] || 0],
    ["Martes", moneyPerDay["martes"] || 0],
    ["Miércoles", moneyPerDay["miércoles"] || 0],
    ["Jueves", moneyPerDay["jueves"] || 0],
    ["Viernes", moneyPerDay["viernes"] || 0],
  ];
  console.log(moneyPerDayData);

  const driverMoney = driverRide?.users
    ? driverRide?.users.length * driverRide?.money
    : 0;
  const driverMoneyData = [
    ["Label", "Dinero ganado"],
    ["Dinero ganado", driverMoney],
  ];
  const passangersData = [
    ["Viaje", "Pasajeros"],
    ["Viaje", (driverRide?.users && driverRide?.users.length) || 0],
  ];

  useEffect(() => {
    const handleUser = async () => {
      const id = localStorage.getItem("userId");
      const data = await fetch("/api/getUser", {
        method: "POST",
        body: JSON.stringify({ id }),
      });
      const response = await data.json();
      if (response.userData) {
        setUser(response.userData);
      }
    };
    handleUser();
  }, []);

  useEffect(() => {
    const handleRides = async () => {
      const data = await fetch("/api/getRides");
      const response = await data.json();
      if (response.userData) {
        setViajes(response.userData);
      }
    };
    handleRides();
  }, []);

  return (
    <div className="flex flex-col gap-5 w-1/4">
      <h2 className="text-3xl font-semibold">Estadísticas como pasajero:</h2>
      <Chart chartType="ColumnChart" data={tripsData} options={tripsOptions} />
      <Chart chartType="ColumnChart" data={moneyData} options={moneyOptions} />
      <Chart
        chartType="PieChart"
        data={moneyPerDayData}
        options={moneyPerDayOptions}
      />
      <h2 className="text-3xl font-semibold">Estadísticas como conductor:</h2>
      <Chart
        chartType="ColumnChart"
        data={driverMoneyData}
        options={driverMoneyOptions}
      />
      <Chart
        chartType="ColumnChart"
        data={passangersData}
        options={passangersOptions}
      />
    </div>
  );
}
