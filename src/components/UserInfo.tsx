"use client";
import React, { useState } from "react";
import { Button, Input } from ".";
import { db } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { onValue, ref, set } from "firebase/database";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function UserInfo() {
  const router = useRouter();
  const schema = yup.object({
    name: yup.string().required("Nombre requerido"),
    lastName: yup.string().required("Apellido requerido"),
    id: yup
      .string()
      .matches(/^[0-9]+$/, "El id solo puede contener números")
      .min(3, "El ID debe tener mínimo 3 dígitos")
      .max(
        6,
        "El ID debe tener máximo 6 dígitos, por favor no incluyas ceros a la izquierda"
      )
      .required("El id es requerido"),
    password: yup
      .string()
      .required("Contraseña requerida")
      .min(8, "La contraseña debe tener al menos 8 caracteres"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <main className="w-6/12 flex justify-center">
      <form
        className="flex gap-10 items-center flex-col max-w-3xl  pb-20"
        onSubmit={handleSubmit(async ({ name, lastName, id, password }) => {
          const userRef = ref(db, "users/" + id);
          onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (!data)
              set(ref(db, "users/" + id), { name, lastName, id, password });
          });
          localStorage.setItem("userId", id);
          router.push("/");
        })}
      >
        <h2 className="text-4xl text-red-500 font-semibold">
          ¿Cuál es tu nombre?
        </h2>
        <div className="w-full gap-4 flex flex-col">
          <Input
            inputText="Nombre"
            inputType="text"
            label="name"
            error={errors.name}
            register={register}
          />
          <Input
            inputText="Apellido"
            inputType="text"
            label="lastName"
            error={errors.lastName}
            register={register}
          />
        </div>
        <h2 className="text-4xl text-red-500 font-semibold">
          ¿Cuál es tu ID universitario?
        </h2>
        <div className="w-full">
          <Input
            inputText="ID"
            inputType="number"
            label="id"
            error={errors.id}
            register={register}
          />
        </div>
        <h2 className="text-4xl text-red-500 font-semibold">
          Define tu contraseña
        </h2>
        <div className="w-full">
          <Input
            inputText="Contraseña"
            inputType="password"
            label="password"
            error={errors.password}
            register={register}
          />
          <p className="text-xs">Debe tener al menos 8 caracteres.</p>
        </div>
        <div className="pb-20">
          <Button className="bg-red-500 text-white hover:bg-red-400">
            Crear cuenta
          </Button>
        </div>
      </form>
    </main>
  );
}
