"use client";
import Ride from "@/types/Ride";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function RequestedRide() {
  const { id } = useParams();
  const router = useRouter();
  const [viaje, setViaje] = useState<Ride>();

  useEffect(() => {
    const handleRide = async () => {
      const data = await fetch("/api/getRide", {
        method: "POST",
        body: JSON.stringify({ id }),
      });
      const response = await data.json();
      if (response.userData) {
        setViaje(response.userData);
      }
    };
    handleRide();
  }, [id]);

  function handleCancelRide() {
    const userId = localStorage.getItem("userId");
    fetch("/api/deleteUserRide", {
      method: "POST",
      body: JSON.stringify({ userId, ride: viaje }),
    });
    router.push("/carpool");
  }

  if (!viaje) return;
  return (
    <div className="absolute flex flex-col gap-5 w-1/2 z-10 xl:w-1/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-8 bg-white rounded-xl">
      <h2 className="text-3xl text-red-500 font-bold text-center">
        Tu solicitud de viaje
      </h2>
      <div className="grid grid-cols-2 gap-2">
        <p>
          <span className="font-bold">Nombre:</span> {viaje.name}{" "}
          {viaje.lastName}
        </p>
        <p>
          <span className="font-bold">Fecha:</span> {viaje.date}
        </p>
        <p>
          <span className="font-bold">Hora:</span> {viaje.time}
        </p>
        <p>
          <span className="font-bold">Origen:</span> {viaje.origin}
        </p>
        <p>
          <span className="font-bold">Destino:</span> {viaje.destiny}
        </p>
        <p>
          <span className="font-bold">Precio:</span> ${viaje.money}
        </p>
        <p>
          <span className="font-bold">Plazas:</span> {viaje.places}
        </p>
      </div>
      <Link
        href="/mi-perfil"
        className="text-red-500 underline w-full text-center"
      >
        Ver mis viajes solicitados
      </Link>
      <Button
        className="bg-red-500 text-white w-full rounded-xl"
        onClick={handleCancelRide}
      >
        Cancelar viaje
      </Button>
    </div>
  );
}
