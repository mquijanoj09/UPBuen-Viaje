import { Rides, Stats } from "@/components";
import React from "react";

export default function page() {
  return (
    <main className="flex justify-center w-full text-lg overflow-y-scroll pt-32">
      <div className="flex flex-col gap-5 w-2/4">
        <h2 className="text-3xl font-semibold">Mis viajes activos:</h2>
        <Rides gridCols="grid-cols-1" />
        <h2 className="text-3xl font-semibold">Histórico de viajes:</h2>
        <Rides gridCols="grid-cols-1" />
      </div>
      <Stats />
    </main>
  );
}
