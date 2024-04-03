"use client";
import { Down, Plus, Profile, Search } from "@/icons";
import Link from "next/link";
import { Login } from ".";
import { useState } from "react";

export default function NavBar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  function handleSetIsLoginOpen() {
    setIsLoginOpen(!isLoginOpen);
  }

  return (
    <div className="relative">
      <nav className="flex items-center justify-between gap-10 py-5 px-40 z-50 bg-red-100 w-full fixed top-0">
        <h1 className="text-4xl font-bold">
          <Link href={"/"} className="flex">
            <p className="text-[#F10B60]">U</p>
            <p className="text-[#CD25B3]">P</p>
            <p className="text-[#AF3BFA]">B</p>
            uen Viaje 🚗
          </Link>
        </h1>
        <ul className="flex items-center justify-center cursor-pointer gap-10 font-semibold text-xl text-red-500">
          <Link href="/carpool">
            <h3 className="hover:text-red-400">Carpool</h3>
          </Link>
          <div className="flex gap-2 items-center">
            <Search></Search>
            <h3 className="hover:text-red-400">Buscar</h3>
          </div>
          <div className="flex gap-2 items-center">
            <Plus></Plus>
            <h3 className="hover:text-red-400">Publicar un viaje</h3>
          </div>
          <div
            onClick={handleSetIsLoginOpen}
            className="flex gap-2 items-center"
          >
            <Profile></Profile>
            <Down></Down>
          </div>
        </ul>
      </nav>
      {isLoginOpen && (
        <Login handleSetIsLoginOpen={handleSetIsLoginOpen}></Login>
      )}
    </div>
  );
}
