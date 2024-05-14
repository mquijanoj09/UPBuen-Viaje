import { Input, PublishRideForm, Rides } from "@/components";
import React from "react";

export default function page() {
  return (
    <main className="flex w-full text-lg overflow-y-scroll pt-32">
      <div className="flex flex-col gap-5 w-full items-center">
        <h2 className="text-3xl font-semibold">Viajes disponibles:</h2>
        <Rides />
      </div>
    </main>
  );
}
