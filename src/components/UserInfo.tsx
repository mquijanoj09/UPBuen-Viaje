"use client";
import React, { useState } from "react";
import { Button, Input } from ".";
import { onValue, ref, set } from "firebase/database";
import { db } from "@/utils/firebase";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function createUser(e: React.FormEvent) {
    e.preventDefault();
    const starCountRef = ref(db, "users/" + id);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) set(ref(db, "users/" + id), { name, lastName, id, password });
    });
    setName("");
    setLastName("");
    setId("");
    setPassword("");
    router.push("/");
  }

  function handleSetName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function handleSetLastName(event: React.ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value);
  }
  function handleSetId(event: React.ChangeEvent<HTMLInputElement>) {
    setId(event.target.value);
  }
  function handleSetPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <main className="flex items-center justify-center w-full text-lg mt-20">
      <form
        className="flex gap-10 items-center flex-col py-10 max-w-3xl"
        onSubmit={createUser}
      >
        <h2 className="text-4xl text-red-500 font-semibold">
          ¿Cuál es tu nombre?
        </h2>
        <div className="w-full">
          <Input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={handleSetName}
          />
          <Input
            type="text"
            placeholder="Apellido"
            value={lastName}
            onChange={handleSetLastName}
          />
        </div>
        <h2 className="text-4xl text-red-500 font-semibold">
          ¿Cuál es tu ID universitario?
        </h2>
        <div className="w-full">
          <Input
            type="number"
            placeholder="ID"
            value={id}
            onChange={handleSetId}
          />
        </div>
        <h2 className="text-4xl text-red-500 font-semibold">
          Define tu contraseña
        </h2>
        <div className="w-full">
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handleSetPassword}
          />
          <p className="text-xs">
            Debe tener al menos 8 caracteres, 1 letra, 1 número y 1 carácter
            especial.
          </p>
        </div>
        <Button
          className={`bg-red-500 text-white hover:bg-red-400 ${
            name && lastName && id && password !== "" ? "visible" : "invisible"
          }`}
        >
          Crear cuenta
        </Button>
      </form>
    </main>
  );
}
