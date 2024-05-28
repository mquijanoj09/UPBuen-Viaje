"use client";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { onValue, ref, set } from "firebase/database";
import { db } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dayjs from "dayjs";
import { revalidatePath } from "next/cache";

export default function PublishRideForm() {
  const router = useRouter();
  const [user, setUser] = useState<any>();
  const today = new Date();
  const afterNowHour = dayjs().add(1, "hour");
  const schema = yup.object({
    date: yup
      .string()
      .required("La fecha de salida es requerida")
      .test(
        "is-future-or-today-date",
        "La fecha debe ser hoy o una fecha futura",
        (value) => {
          return (
            dayjs(value).isSame(today, "day") || dayjs(value).isAfter(today)
          );
        }
      ),
    time: yup
      .string()
      .required("La hora de salida es requerida")
      .test(
        "is-future-or-today-time",
        "La hora debe ser una hora futura si la fecha es hoy",
        function (value) {
          const { date } = this.parent;
          if (date) {
            const selectedDate = dayjs(date).startOf("day");
            const selectedTime = dayjs(`${date}T${value}`);
            if (selectedDate.isSame(today, "day")) {
              return selectedTime.isAfter(dayjs());
            }
            return selectedDate.isAfter(today);
          }
          return true;
        }
      ),
    origin: yup.string().required("El origen es requerido"),
    destiny: yup.string().required("El destino es requerido"),
    car: yup.string().required("La información del vehículo es requerida"),
    places: yup
      .string()
      .matches(/^[0-9]+$/, "Los cupos solo pueden contener números")
      .required("Los cupos son requeridos"),
    money: yup
      .string()
      .matches(/^[0-9]+$/, "El aporte solo puede contener números")
      .required("El aporte es requerido"),
    plate: yup.string().matches(/^[A-Z]{3}[0-9]{3}$/, {
      message: "La placa debe tener el formato ABC123",
    }),
    info: yup.string().optional(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setUser(localStorage.getItem("userId") || "");
  }, []);

  return (
    <form
      className="w-6/12"
      onSubmit={handleSubmit(
        async ({
          date,
          time,
          origin,
          destiny,
          car,
          plate,
          places,
          money,
          info,
        }) => {
          const id = localStorage.getItem("userId");
          if (!id) return;
          const userRef = ref(db, "users/" + id);
          onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (!data) return;
            const { name, lastName } = data;
            fetch("/api/createRide", {
              method: "POST",
              body: JSON.stringify({
                id,
                name,
                lastName,
                date,
                time,
                origin,
                destiny,
                car,
                plate,
                places,
                money,
                info,
              }),
            });
            router.push("/carpool");
          });
        }
      )}
    >
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
              inputText="Fecha de salida"
              inputType="date"
              register={register}
              label="date"
              error={errors.date}
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <h4>Hora de salida: *</h4>
            <Input
              inputText="Hora de salida"
              inputType="time"
              register={register}
              label="time"
              error={errors.time}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Orígen: *</h4>
          <Input
            inputText="Orígen"
            inputType="text"
            register={register}
            label="origin"
            error={errors.origin}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h4>Destino: *</h4>
          <Input
            inputText="Destino"
            inputType="text"
            register={register}
            label="destiny"
            error={errors.destiny}
          />
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2 w-1/2">
            <h4>Info vehiculo: *</h4>
            <Input
              inputText="Info vehiculo"
              inputType="text"
              register={register}
              label="car"
              error={errors.car}
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <h4>Placa vehículo *</h4>
            <Input
              inputText="Placa vehículo"
              inputType="text"
              register={register}
              label="plate"
              error={errors.plate}
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2 w-1/2">
            <h4>Cupos disponibles: *</h4>
            <Input
              inputText="Cupos disponibles"
              inputType="number"
              register={register}
              label="places"
              error={errors.places}
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <h4>Aporte por pasajero: *</h4>
            <Input
              inputText="Aporte por pasajero"
              inputType="number"
              register={register}
              label="money"
              error={errors.money}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Informacíon adicional:</h4>
          <textarea
            className="mb-4 h-32 w-full outline-[#CD25B3] border border-[#CD25B3] p-2 rounded-xl"
            placeholder="Ingrese detalles adicionales de su viaje"
            disabled={!user}
            {...register("info")}
          />
        </div>
        <Button
          className="bg-red-500 hover:bg-red-400 text-white"
          disabled={!user}
          type="submit"
        >
          Publicar Viaje
        </Button>
      </div>
    </form>
  );
}
