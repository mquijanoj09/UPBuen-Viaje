"use client";
import { Destination, From } from "@/icons";
import { formatPrice } from "@/utils/price";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import Button from "./Button";
import Ride from "@/types/Ride";
import { useRouter } from "next/navigation";

export default function UserRides() {
  const [user, setUser] = useState<any>({});
  const [viajes, setViajes] = useState<any[]>([]);
  const router = useRouter();
  const requestedRides = viajes.filter(
    (viaje) => user && viaje.users?.includes(user.id)
  );
  const date = new Date();
  const activeRides = requestedRides.filter(
    (ride) => new Date(ride.date) > date
  );

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
      <h2 className="text-3xl font-semibold">Mis viajes activos:</h2>
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
      <h2 className="text-3xl font-semibold">Histórico de viajes:</h2>
      <div className={`grid-cols-1 w-3/4 grid gap-16 pb-20`}>
        {requestedRides.map((requestedRide) => {
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
    </div>
  );
}
