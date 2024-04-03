import { Next } from "@/icons";
import Link from "next/link";
import React from "react";

interface Props {
  handleSetIsLoginOpen: () => void;
}

export default function Login({ handleSetIsLoginOpen }: Props) {
  return (
    <div className="absolute z-20 bg-red-100 right-0 top-[60px]">
      <Link
        href={"/login"}
        className="p-4 w-80 hover:bg-red-200 flex justify-between"
        onClick={handleSetIsLoginOpen}
      >
        <p>Iniciar sesión</p>
        <Next />
      </Link>
      <Link
        href={"/registrarse"}
        className="p-4 w-80 hover:bg-red-200 flex justify-between"
        onClick={handleSetIsLoginOpen}
      >
        <p>Registrarse</p>
        <Next />
      </Link>
    </div>
  );
}
