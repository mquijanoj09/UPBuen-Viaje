"use client";
import { Button, Input } from "@/components";
import { Checked, Circle } from "@/icons";
import Link from "next/link";
import { useState } from "react";

export default function RegisterForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");

  function handleSetEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleSetIsChecked() {
    setIsChecked(!isChecked);
  }

  return (
    <main className="flex items-center justify-center w-full text-lg mt-20">
      <div className="flex gap-10 items-center flex-col py-10 max-w-3xl">
        <h2 className="text-4xl text-red-500 font-semibold">
          ¿Cuál es tu email?
        </h2>
        <div className="w-full">
          <Input
            type="email"
            placeholder="ejemplo@upb.edu.co"
            value={email}
            onChange={handleSetEmail}
          />
          <Button
            onClick={handleSetIsChecked}
            className="hover:bg-red-100 rounded-xl w-full text-left flex items-center justify-between"
          >
            <p>No quiero recibir noticias, solo quiero registrarme</p>
            {!isChecked ? <Circle /> : <Checked />}
          </Button>
        </div>
        <p className="text-sm">
          Cuando estoy suscrito, puedo desuscribirme en cualquier momento
          poniéndome en contacto con la UPB.
        </p>

        <Link
          href="/registrarse/informacion"
          className={`bg-red-500 text-white hover:bg-red-400 rounded-full p-4 ${
            email !== "" ? "visible" : "invisible"
          }`}
        >
          Continuar
        </Link>
      </div>
    </main>
  );
}
