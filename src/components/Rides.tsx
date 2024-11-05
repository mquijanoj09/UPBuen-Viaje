"use client";
import { Destination, From } from "@/icons";
import { formatPrice } from "@/utils/price";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import GetOnRide from "./GetOnRide";

interface Props {
  gridCols?: string;
}

export default function Rides({
  gridCols = "grid-cols-1 lg:grid-cols-2",
}: Props) {
  const [user, setUser] = useState<string>();
  const [viajes, setViajes] = useState<any[]>([]);
  const requestedRides = viajes.filter(
    (viaje) => user && viaje.users?.includes(user)
  );

  useEffect(() => {
    setUser(localStorage.getItem("userId") || "");
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
    <div
      className={`${gridCols} w-full md:w-3/4 grid gap-8 md:gap-16 pb-20 px-4 md:px-0`}
    >
      {viajes
        .filter((ride) => new Date(ride.date) > new Date())
        .map((ride) => {
          const noSeats = ride.places === 0;
          const requestedRide = requestedRides.find(
            (requestedRide) => requestedRide.id === ride.id
          );
          return (
            <div className="flex flex-col gap-2" key={ride.id}>
              <div
                className={`flex flex-col md:flex-row bg-red-100 rounded-xl border border-[#CD25B3] ${
                  noSeats && !user && "opacity-60 cursor-not-allowed"
                } `}
              >
                <div
                  className={`w-full md:w-1/2 flex flex-col items-center justify-center gap-5 border-b md:border-r md:border-b-0 border-[#CD25B3] p-5 ${
                    !user && "blur-sm cursor-not-allowed"
                  }`}
                >
                  <Image src="" alt="foto usuario" width={100} height={100} />
                  <h4>
                    {ride.name} {ride.lastName}
                  </h4>
                </div>
                <div
                  className={`w-full p-5 flex flex-col gap-2 justify-center ${
                    !user && "blur-sm cursor-not-allowed"
                  }`}
                >
                  <div className="flex gap-5">
                    <h3>{ride.date}</h3>
                    <strong>{ride.time}</strong>
                  </div>
                  <div className="flex gap-2">
                    <From />
                    <h3>Orígen: {ride.origin}</h3>
                  </div>
                  <div className="flex gap-2">
                    <Destination />
                    <h3>Destino: {ride.destiny}</h3>
                  </div>
                  <h4>${formatPrice(Number(ride.money))} por pasajero</h4>

                  <h4 className={`${noSeats && ""}`}>
                    <strong>{ride.places}</strong> asientos disponibles
                  </h4>
                  {!requestedRide && <GetOnRide ride={ride} />}
                </div>
              </div>
              {!user && (
                <Link
                  href={"login"}
                  className="font-bold text-lg w-full text-center"
                >
                  Inicia sesión para poder ver los viajes!
                </Link>
              )}
            </div>
          );
        })}
    </div>
  );
}
