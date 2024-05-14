"use client";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { onValue, ref, set } from "firebase/database";
import { db } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PublishRideForm() {
  const router = useRouter();
  const [user, setUser] = useState<any>();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [origin, setOrigin] = useState("");
  const [destiny, setDestiny] = useState("");
  const [car, setCar] = useState("");
  const [places, setPlaces] = useState("");
  const [money, setMoney] = useState("");
  const [plate, setPlate] = useState("");

  const handleSetDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleSetTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const handleSetOrigin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrigin(event.target.value);
  };

  const handleSetDestiny = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDestiny(event.target.value);
  };

  const handleSetCar = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCar(event.target.value);
  };

  const handleSetPlaces = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlaces(event.target.value);
  };

  const handleSetMoney = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMoney(event.target.value);
  };

  const handleSetPlate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlate(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const id = localStorage.getItem("userId");
    if (!id) return;
    const userRef = ref(db, "users/" + id);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;
      const { name, lastName } = data;
      const viajesRef = ref(db, "viajes/" + id);
      onValue(viajesRef, (snapshot) => {
        const data = snapshot.val();
        if (!data)
          set(ref(db, "viajes/" + id), {
            date,
            time,
            origin,
            destiny,
            car,
            places,
            money,
            plate,
            name,
            lastName,
            id,
          });
      });
    });
    setDate("");
    setTime("");
    setOrigin("");
    setDestiny("");
    setCar("");
    setPlaces("");
    setMoney("");
    setPlate("");
    router.push("/carpool");
  };

  useEffect(() => {
    setUser(localStorage.getItem("userId") || "");
  }, []);

  return (
    <form className="w-5/12" onSubmit={handleSubmit}>
      {!user && (
        <Link
          href={"login"}
          className="absolute max-w-sm z-20 font-bold text-3xl w-full text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          Inicia sesión para poder publicar un viaje!
        </Link>
      )}
      <div className={`flex flex-col gap-2 pb-20 ${!user && "blur-sm"}`}>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2 w-1/2">
            <h4>Fecha de salida: *</h4>
            <Input
              value={date}
              placeholder="Fecha de salida"
              onChange={handleSetDate}
              type="date"
              disabled={!user}
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <h4>Hora de salida: *</h4>
            <Input
              value={time}
              placeholder="Hora de salida"
              onChange={handleSetTime}
              type="time"
              disabled={!user}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Orígen: *</h4>
          <Input
            value={origin}
            placeholder="Lugar de orígen"
            onChange={handleSetOrigin}
            type="text"
            disabled={!user}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h4>Destino: *</h4>
          <Input
            value={destiny}
            placeholder="Lugar de destino"
            onChange={handleSetDestiny}
            type="text"
            disabled={!user}
          />
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2 w-1/2">
            <h4>Info vehiculo: *</h4>
            <Input
              value={car}
              placeholder="Ej: Mazda 3 rojo"
              onChange={handleSetCar}
              type="text"
              disabled={!user}
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <h4>Placa vehículo *</h4>
            <Input
              value={plate}
              placeholder="Ej: JIX980"
              onChange={handleSetPlate}
              type="text"
              disabled={!user}
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2 w-1/2">
            <h4>Cupos disponibles: *</h4>
            <Input
              value={places}
              placeholder="Ej: 4"
              onChange={handleSetPlaces}
              type="number"
              disabled={!user}
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <h4>Aporte por pasajero: *</h4>
            <Input
              value={money}
              placeholder="Ej: 2.000"
              onChange={handleSetMoney}
              type="money"
              disabled={!user}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Informacíon adicional: *</h4>
          <textarea
            className="mb-4 h-32 w-full outline-[#CD25B3] border border-[#CD25B3] p-2 rounded-xl"
            placeholder="Ingrese detalles adicionales de su viaje"
            disabled={!user}
          />
        </div>
        <Button
          className="bg-red-500 hover:bg-red-400 text-white"
          disabled={!user}
        >
          Publicar Viaje
        </Button>
      </div>
    </form>
  );
}
