"use client";
import { Destination, From } from "@/icons";
import { db } from "@/utils/firebase";
import { formatPrice } from "@/utils/price";
import { onValue, ref, set } from "firebase/database";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";

interface Props {
  gridCols?: string;
}

export default function Rides({ gridCols = "grid-cols-2" }: Props) {
  const [user, setUser] = useState<string>();
  const [viajes, setViajes] = useState<any[]>([]);

  useEffect(() => {
    setUser(localStorage.getItem("userId") || "");
  }, []);

  useEffect(() => {
    const viajesRef = ref(db, "viajes/");
    onValue(viajesRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;
      setViajes(Object.values(data));
    });
  }, []);

  return (
    <div className={`${gridCols} w-3/4 grid gap-16 pb-20`}>
      {viajes.map((ride) => {
        const noSeats = ride.places === 0;
        return (
          <div
            className={`flex bg-red-100 rounded-xl border relative border-[#CD25B3] ${
              noSeats && !user && "opacity-60 cursor-not-allowed"
            } `}
            key={ride.id}
          >
            {!user && (
              <Link
                href={"login"}
                className="absolute font-bold text-lg w-full text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                Inicia sesión para poder ver los viajes!
              </Link>
            )}
            <div
              className={`w-1/2 flex flex-col items-center justify-center gap-5 border-r border-[#CD25B3] p-5 ${
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
            </div>
          </div>
        );
      })}
    </div>
  );
}
