"use client";
import React, { useState } from "react";
import Button from "./Button";
import { ref, set } from "firebase/database";
import { db } from "@/utils/firebase";
import Link from "next/link";
import Ride from "@/types/Ride";

interface Props {
  ride: any;
}

export default function GetOnRide({ ride }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSetIsOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleReserveSeat(ride: Ride) {
    const user = localStorage.getItem("userId");
    if (!user || ride.places === 0) return;
    fetch("/api/updateRide", {
      method: "POST",
      body: JSON.stringify({ ride, user }),
    });
  }

  const noSeats = ride.places === 0;

  return (
    <>
      <button
        className={` text-sm rounded-full p-2 mx-auto text-white hover:bg-red-400 ${
          noSeats ? "cursor-not-allowed bg-red-400 opacity-40" : "bg-red-500"
        }`}
        onClick={handleSetIsOpen}
      >
        Solicitar asiento
      </button>
      {isOpen && (
        <>
          <div
            className={`fixed right-0 top-0 z-40 h-full w-full cursor-pointer bg-black transition-opacity duration-[400ms] ${
              isOpen ? "visible opacity-60" : "invisible opacity-0"
            }`}
            onClick={handleSetIsOpen}
          ></div>
          <div className="absolute z-50 transform flex flex-col gap-5 w-1/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white p-8 rounded-xl drop-shadow-2xl">
            <button
              className="absolute -top-2 -right-2 p-1 rounded-full border border-main bg-white"
              onClick={handleSetIsOpen}
            >
              x
            </button>
            <>
              <h2 className="text-2xl font-semibold">
                Deseas solicitar un asiento en el viaje con destino a{" "}
                {ride.destiny}?
              </h2>
              <div className="flex gap-5 justify-center">
                <Link
                  href="/viaje/[id]"
                  as={`/viaje/${ride.id}`}
                  className="text-sm rounded-full p-2 text-white hover:bg-red-400 bg-red-500"
                  onClick={() => handleReserveSeat(ride)}
                >
                  Solicitar
                </Link>
                <button
                  className="text-sm rounded-full p-2 text-white hover:bg-red-400 bg-red-500"
                  onClick={handleSetIsOpen}
                >
                  Cancelar
                </button>
              </div>
            </>
          </div>
        </>
      )}
    </>
  );
}
