"use client";
import { Button, Input } from "@/components";
import { Checked, Circle } from "@/icons";
import { useState } from "react";
import campus from "../../public/images/campus.jpeg";
import Image from "next/image";

export default function LoginForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSetPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleSetEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleSetIsChecked() {
    setIsChecked(!isChecked);
  }

  return (
    <main className="flex items-center justify-center w-full mt-20 text-lg">
      {/* <Image
        src={campus}
        alt="campus"
        className="inset-0 absolute w-full h-full object-cover opacity-40 -z-50"
      /> */}
      <div className="flex gap-10 items-center flex-col py-10 max-w-3xl">
        <h2 className="text-4xl text-red-500 font-semibold">
          ¿Cuál es tu email y tu contraseña?
        </h2>
        <div className="w-full">
          <Input
            type="email"
            placeholder="ejemplo@upb.edu.co"
            value={email}
            onChange={handleSetEmail}
          />
          <Input
            type="password"
            placeholder="Contraseña"
            onChange={handleSetPassword}
            value={password}
          />
          <Button
            onClick={handleSetIsChecked}
            className="hover:bg-red-100 rounded-xl w-full text-left flex items-center justify-between"
          >
            <p>Recuérdame</p>
            {!isChecked ? <Circle /> : <Checked />}
          </Button>
          <Button
            onClick={handleSetIsChecked}
            className="hover:bg-red-100 rounded-xl w-full text-left text-red-500"
          >
            <p>Olvidé mi contraseña</p>
          </Button>
        </div>
        <Button className="bg-red-500 text-white hover:bg-red-400">
          Iniciar sesión
        </Button>
      </div>
    </main>
  );
}
