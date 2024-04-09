import { Input, PublishRideForm, Rides } from "@/components";
import React from "react";

export default function page() {
  return (
    <main className="mt-20 overflow-scroll w-full flex flex-col items-center justify-center gap-10">
      <h2 className="text-3xl font-semibold">Viajes disponibles!</h2>
      <Rides />
    </main>
  );
}
