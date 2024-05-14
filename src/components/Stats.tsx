"use client";

import React from "react";
import { Chart } from "react-google-charts";

export default function Stats() {
  const tripsData = [
    ["Día", "Viajes"],
    ["Lunes", 1],
    ["Martes", 2],
    ["Miércoles", 1],
    ["Jueves", 0],
    ["Viernes", 3],
  ];

  const moneyRaised = 58000;
  0;

  const moneyData = [
    ["Label", "Dinero recaudado"],
    ["Dinero recaudado", moneyRaised],
  ];

  const moneyPerDayData = [
    ["Día", "Dinero recaudado"],
    ["Lunes", 100],
    ["Martes", 200],
    ["Miércoles", 300],
    ["Jueves", 400],
    ["Viernes", 500],
  ];

  const tripsOptions = {
    title: "Viajes realizados en la semana",
    hAxis: {
      title: "Viajes",
    },
    vAxis: {
      title: "Día",
    },
    colors: ["#CD25B3"],
  };

  const moneyOptions = {
    title: "Dinero recaudado histórico",
    vAxis: {
      title: "Dinero",
    },
    colors: ["#F10B60"],
  };

  const moneyPerDayOptions = {
    title: "Dinero histórico recaudado por día de la semana",
    hAxis: {
      title: "Día",
    },
    vAxis: {
      title: "Dinero",
    },
  };

  return (
    <div className="flex flex-col gap-5 w-1/4">
      <h2 className="text-3xl font-semibold">Estadísticas:</h2>
      <Chart chartType="ColumnChart" data={tripsData} options={tripsOptions} />
      <Chart chartType="ColumnChart" data={moneyData} options={moneyOptions} />
      <Chart
        chartType="PieChart"
        data={moneyPerDayData}
        options={moneyPerDayOptions}
      />
    </div>
  );
}
