"use client";
import { Destination, From } from "@/icons";
import { formatPrice } from "@/utils/price";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import Button from "./Button";
import Ride from "@/types/Ride";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

export default function UserRides() {
  const [user, setUser] = useState<any>({});
  const [viajes, setViajes] = useState<any[]>([]);
  const router = useRouter();
  const date = new Date();
  const requestedRides = viajes.filter(
    (viaje) => user && viaje.users?.includes(user.id)
  );
  const historicRides = viajes.filter(
    (viaje) =>
      user && viaje.users?.includes(user.id) && date > new Date(viaje.date)
  );
  const activeRides = requestedRides.filter(
    (ride) => new Date(ride.date) > date
  );
  const driverRide = viajes.find(
    (ride) => ride.id === user.id && dayjs(ride.date).isAfter(dayjs())
  );
  const historicDriverRides = viajes.find(
    (ride) => ride.id === user.id && dayjs(ride.date).isBefore(dayjs())
  );
  console.log(historicDriverRides);
  const reservedSeats = driverRide?.users ? driverRide.users.length : 0;

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

  function handleCancelRide(ride: Ride) {
    fetch("/api/deleteUserRide", {
      method: "POST",
      body: JSON.stringify({ userId: user.id, ride: ride }),
    });
    router.push("/carpool");
  }

  if (!user) return;
  return (
    <div className="flex flex-col gap-5 w-2/4">
      <h1 className="font-bold text-4xl text-[#F10B60]">Hola {user.name}!</h1>
      <h2 className="text-3xl font-semibold">
        Mis viajes activos como pasajero:
      </h2>
      <div className={`grid-cols-1 w-3/4 grid gap-16 pb-20`}>
        {activeRides.map((activeRide) => {
          return (
            <div className="flex flex-col gap-3" key={activeRide.id}>
              <div
                className={`flex bg-red-100 rounded-xl border border-[#CD25B3]`}
              >
                <div
                  className={`w-1/2 flex flex-col items-center justify-center gap-5 border-r border-[#CD25B3] p-5 ${
                    !user && "blur-sm cursor-not-allowed"
                  }`}
                >
                  <Image src="" alt="foto usuario" width={100} height={100} />
                  <h4>
                    {activeRide.name} {activeRide.lastName}
                  </h4>
                </div>
                <div
                  className={`w-full p-5 flex flex-col gap-2 justify-center ${
                    !user && "blur-sm cursor-not-allowed"
                  }`}
                >
                  <div className="flex gap-5">
                    <h3>{activeRide.date}</h3>
                    <strong>{activeRide.time}</strong>
                  </div>
                  <div className="flex gap-2">
                    <From />
                    <h3>Orígen: {activeRide.origin}</h3>
                  </div>
                  <div className="flex gap-2">
                    <Destination />
                    <h3>Destino: {activeRide.destiny}</h3>
                  </div>
                  <h4>${formatPrice(Number(activeRide.money))} por pasajero</h4>
                  <h4>
                    <strong>{activeRide.places}</strong> asientos disponibles
                  </h4>
                </div>
              </div>
              <Button
                className="bg-red-500 hover:bg-red-400 text-white w-full rounded-xl"
                onClick={() => handleCancelRide(activeRide)}
              >
                Cancelar viaje
              </Button>
            </div>
          );
        })}
      </div>
      {driverRide && (
        <>
          <h2 className="text-3xl font-semibold">
            Viaje activo como conductor:
          </h2>
          <div className={`grid-cols-1 w-3/4 grid gap-16 pb-20`}>
            <div className="flex flex-col gap-3">
              <div
                className={`flex bg-red-100 rounded-xl border border-[#CD25B3]`}
              >
                <div
                  className={`w-1/2 flex flex-col items-center justify-center gap-5 border-r border-[#CD25B3] p-5 ${
                    !user && "blur-sm cursor-not-allowed"
                  }`}
                >
                  <Image src="" alt="foto usuario" width={100} height={100} />
                  <h4>
                    {driverRide.name} {driverRide.lastName}
                  </h4>
                </div>
                <div
                  className={`w-full p-5 flex flex-col gap-2 justify-center ${
                    !user && "blur-sm cursor-not-allowed"
                  }`}
                >
                  <div className="flex gap-5">
                    <h3>{driverRide.date}</h3>
                    <strong>{driverRide.time}</strong>
                  </div>
                  <div className="flex gap-2">
                    <From />
                    <h3>Orígen: {driverRide.origin}</h3>
                  </div>
                  <div className="flex gap-2">
                    <Destination />
                    <h3>Destino: {driverRide.destiny}</h3>
                  </div>
                  <h4>${formatPrice(Number(driverRide.money))} por pasajero</h4>
                  <h4>
                    <strong>{driverRide.places}</strong> asientos disponibles
                  </h4>
                  <h4>
                    <strong>{reservedSeats}</strong> asientos reservados
                  </h4>
                  {driverRide.users && (
                    <h4>
                      Id pasajeros reservados:{" "}
                      <strong>
                        {driverRide.users.map((user: any) => user).join(", ")}
                      </strong>
                    </h4>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <h2 className="text-3xl font-semibold">
        Histórico de viajes como pasajero:
      </h2>
      <div className={`grid-cols-1 w-3/4 grid gap-16 pb-20`}>
        {historicRides.map((requestedRide) => {
          return (
            <Fragment key={requestedRide.id}>
              <div
                className={`flex bg-red-100 rounded-xl border border-[#CD25B3]`}
              >
                <div
                  className={`w-1/2 flex flex-col items-center justify-center gap-5 border-r border-[#CD25B3] p-5 ${
                    !user && "blur-sm cursor-not-allowed"
                  }`}
                >
                  <Image src="" alt="foto usuario" width={100} height={100} />
                  <h4>
                    {requestedRide.name} {requestedRide.lastName}
                  </h4>
                </div>
                <div
                  className={`w-full p-5 flex flex-col gap-2 justify-center ${
                    !user && "blur-sm cursor-not-allowed"
                  }`}
                >
                  <div className="flex gap-5">
                    <h3>{requestedRide.date}</h3>
                    <strong>{requestedRide.time}</strong>
                  </div>
                  <div className="flex gap-2">
                    <From />
                    <h3>Orígen: {requestedRide.origin}</h3>
                  </div>
                  <div className="flex gap-2">
                    <Destination />
                    <h3>Destino: {requestedRide.destiny}</h3>
                  </div>
                  <h4>
                    ${formatPrice(Number(requestedRide.money))} por pasajero
                  </h4>
                  <h4>
                    <strong>{requestedRide.places}</strong> asientos disponibles
                  </h4>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
      {historicDriverRides && (
        <>
          <h2 className="text-3xl font-semibold">
            Viaje historico como conductor:
          </h2>
          <div className={`grid-cols-1 w-3/4 grid gap-16 pb-20`}>
            <div className="flex flex-col gap-3">
              <div
                className={`flex bg-red-100 rounded-xl border border-[#CD25B3]`}
              >
                <div
                  className={`w-1/2 flex flex-col items-center justify-center gap-5 border-r border-[#CD25B3] p-5 ${
                    !user && "blur-sm cursor-not-allowed"
                  }`}
                >
                  <Image src="" alt="foto usuario" width={100} height={100} />
                  <h4>
                    {historicDriverRides.name} {historicDriverRides.lastName}
                  </h4>
                </div>
                <div
                  className={`w-full p-5 flex flex-col gap-2 justify-center ${
                    !user && "blur-sm cursor-not-allowed"
                  }`}
                >
                  <div className="flex gap-5">
                    <h3>{historicDriverRides.date}</h3>
                    <strong>{historicDriverRides.time}</strong>
                  </div>
                  <div className="flex gap-2">
                    <From />
                    <h3>Orígen: {historicDriverRides.origin}</h3>
                  </div>
                  <div className="flex gap-2">
                    <Destination />
                    <h3>Destino: {historicDriverRides.destiny}</h3>
                  </div>
                  <h4>
                    ${formatPrice(Number(historicDriverRides.money))} por
                    pasajero
                  </h4>
                  <h4>
                    <strong>{historicDriverRides.places}</strong> asientos
                    disponibles
                  </h4>
                  <h4>
                    <strong>{reservedSeats}</strong> asientos reservados
                  </h4>
                  {historicDriverRides.users && (
                    <h4>
                      Id pasajeros reservados:{" "}
                      <strong>
                        {historicDriverRides.users
                          .map((user: any) => user)
                          .join(", ")}
                      </strong>
                    </h4>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
