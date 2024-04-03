import { ArrowRight, Next } from "@/icons";
import Link from "next/link";
import React from "react";

export default function Destinations() {
  return (
    <section className="bg-red-500 py-10">
      <h2 className="text-white text-2xl font-bold mb-6 text-center">
        Elige tu destino!
      </h2>
      <div className="flex items-center justify-center gap-14">
        <Link
          href={"/carpool"}
          className="bg-white hover:bg-red-100 max-w-fit p-4 rounded-lg flex gap-14"
        >
          <div className="flex gap-4">
            <p>Estadio</p>
            <ArrowRight></ArrowRight>
            <p>UPB</p>
          </div>
          <Next></Next>
        </Link>
        <Link
          href={"/carpool"}
          className="bg-white max-w-fit hover:bg-red-100 p-4 rounded-lg flex gap-14"
        >
          <div className="flex gap-4">
            <p>UPB</p>
            <ArrowRight></ArrowRight>
            <p>UdeA</p>
          </div>
          <Next></Next>
        </Link>
        <Link
          href={"/carpool"}
          className="bg-white max-w-fit p-4 hover:bg-red-100 rounded-lg flex gap-14"
        >
          <div className="flex gap-4">
            <p>El Tesoro</p>
            <ArrowRight></ArrowRight>
            <p>UPB</p>
          </div>
          <Next></Next>
        </Link>
      </div>
    </section>
  );
}
