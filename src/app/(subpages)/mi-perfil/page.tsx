import { Rides, Stats, UserRides } from "@/components";
import React from "react";

export default function page() {
  return (
    <main className="flex justify-center w-full text-lg overflow-y-scroll pt-32">
      <UserRides />
      <Stats />
    </main>
  );
}
