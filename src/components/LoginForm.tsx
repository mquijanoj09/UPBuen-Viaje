"use client";
import { Button, Input } from "@/components";
import { Checked, Circle } from "@/icons";
import { db } from "@/utils/firebase";
import { onValue, ref } from "firebase/database";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleSetPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleSetId(event: React.ChangeEvent<HTMLInputElement>) {
    setId(event.target.value);
  }

  function handleSetIsChecked() {
    setIsChecked(!isChecked);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ id, password }),
    });
    const data = await res.json();
    if (data.isLoggedIn) {
      localStorage.setItem("userId", id);
      router.push("/");
    }
  }

  return (
    <main className="flex items-center justify-center w-full mt-20 text-lg">
      <form
        className="flex gap-10 items-center flex-col py-10 max-w-3xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl text-red-500 font-semibold">
          ¿Cuál es tu id y tu contraseña?
        </h2>
        <div className="w-full">
          <Input
            type="id"
            placeholder="ejemplo@upb.edu.co"
            value={id}
            onChange={handleSetId}
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
        <Button
          type="submit"
          className="bg-red-500 text-white hover:bg-red-400"
        >
          Iniciar sesión
        </Button>
      </form>
    </main>
  );
}
