import { ArrowRight, Next } from "@/icons";
import Link from "next/link";
import React from "react";

export default function Destinations() {
  return (
    <section className="bg-red-500 py-10 px-4 md:px-0">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-6 text-center">
        Elige tu destino!
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-14">
        <Link
          href={"/carpool"}
          className="bg-white hover:bg-red-100 w-full md:w-auto p-4 rounded-lg flex justify-between md:gap-14"
        >
          <div className="flex gap-4">
            <p>Estadio</p>
            <ArrowRight />
            <p>UPB</p>
          </div>
          <Next />
        </Link>
        <Link
          href={"/carpool"}
          className="bg-white w-full md:w-auto hover:bg-red-100 p-4 rounded-lg flex justify-between md:gap-14"
        >
          <div className="flex gap-4">
            <p>UPB</p>
            <ArrowRight />
            <p>UdeA</p>
          </div>
          <Next />
        </Link>
        <Link
          href={"/carpool"}
          className="bg-white w-full md:w-auto p-4 hover:bg-red-100 rounded-lg flex justify-between md:gap-14"
        >
          <div className="flex gap-4">
            <p>El Tesoro</p>
            <ArrowRight />
            <p>UPB</p>
          </div>
          <Next />
        </Link>
      </div>
    </section>
  );
}
