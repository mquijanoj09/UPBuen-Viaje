"use client";
import { Button, Input } from "@/components";
import { Checked, Circle } from "@/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const schema = yup.object({
    email: yup
      .string()
      .email("Ingresa un correo válido")
      .required("Correo requerido")
      .matches(/@upb.edu.co$/, "El correo debe ser de la UPB"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSetIsChecked() {
    setIsChecked(!isChecked);
  }

  return (
    <main className="flex items-center justify-center w-full mt-20 text-lg">
      <div className="flex gap-10 items-center flex-col py-10 max-w-3xl">
        <h2 className="text-4xl text-red-500 font-semibold">
          ¿Cuál es tu email?
        </h2>
        <form
          className="w-full flex flex-col gap-5"
          onSubmit={handleSubmit(async ({ email }) => {
            console.log(email);
            router.push("/registrarse/informacion");
          })}
        >
          <Input
            inputText="Email"
            inputType="email"
            label="email"
            error={errors.email}
            register={register}
          />
          <Button
            onClick={handleSetIsChecked}
            type="button"
            className="hover:bg-red-100 rounded-xl w-full text-left flex items-center justify-between"
          >
            <p>No quiero recibir noticias, solo quiero registrarme</p>
            {!isChecked ? <Circle /> : <Checked />}
          </Button>
          <p className="text-sm">
            Cuando estoy suscrito, puedo desuscribirme en cualquier momento
            poniéndome en contacto con la UPB.
          </p>

          <button
            type="submit"
            className="bg-red-500 text-white hover:bg-red-400 rounded-full p-4 mx-auto"
          >
            Continuar
          </button>
        </form>
      </div>
    </main>
  );
}
