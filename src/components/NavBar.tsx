"use client";
import { Down, Plus, Profile, Search } from "@/icons";
import Link from "next/link";
import { Login } from ".";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const pathname = usePathname();

  function handleSetIsLoginOpen() {
    setIsLoginOpen(!isLoginOpen);
  }

  useEffect(() => {
    setIsLoginOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 py-5 px-40 z-20 bg-red-100 w-full">
      <div className="relative flex items-center justify-between gap-10">
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
          <div className="flex gap-2 items-center hover:text-red-400">
            <Search />
            <h3>Buscar</h3>
          </div>
          <Link
            href={"/publicar-viaje"}
            className="flex gap-2 items-center hover:text-red-400"
          >
            <Plus />
            <h3>Publicar un viaje</h3>
          </Link>
          <button
            onClick={handleSetIsLoginOpen}
            className="flex gap-2 items-center z-50 hover:opacity-70"
          >
            <Profile />
            <Down />
          </button>
        </ul>
        {isLoginOpen && <Login handleSetIsLoginOpen={handleSetIsLoginOpen} />}
      </div>
    </nav>
  );
}
