import {
  Calendar,
  Check,
  Coins,
  Destination,
  Emoji,
  From,
  People,
} from "@/icons";
import { Button } from ".";
import Image from "next/image";
import img3 from "../../public/images/imagen3.png";
import Link from "next/link";

export default function MainSection() {
  return (
    <section className="text-red-500 md:mt-24 lg:mt-20 mt-28">
      <h1 className="text-white text-2xl md:text-4xl font-semibold text-center absolute z-10 w-full mt-5">
        Viaja de manera segura a la U!
      </h1>
      <Image src={img3} alt="Logo UPBuenViaje" className="relative" />

      {/* Desktop Search */}
      <div className="hidden lg:flex rounded-full bg-red-100 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
        <div className="w-48 flex gap-2 items-center pl-5">
          <From />
          <p>Desde: Estadio</p>
        </div>
        <div className="w-48 flex gap-2 items-center pl-5 border-l border-gray-300">
          <Destination />
          <p>Hasta: UPB</p>
        </div>
        <div className="w-48 flex gap-2 items-center pl-5 border-l border-gray-300">
          <Calendar />
          <p>Hoy</p>
        </div>
        <div className="w-48 flex gap-2 items-center pl-5 border-l border-gray-300">
          <People />
          <p>1 pasajero</p>
        </div>
        <Link
          href="/carpool"
          className="bg-red-500 text-white w-32 hover:bg-red-400 rounded-full rounded-l-none p-4 text-center"
        >
          Buscar
        </Link>
      </div>

      {/* Mobile Search */}
      <div className="lg:hidden mx-auto px-4 pt-4 space-y-2">
        <div className="bg-red-100 rounded-xl p-4 space-y-4">
          <div className="flex items-center gap-3">
            <From />
            <div className="flex-1">
              <label className="text-xs text-gray-600">Desde</label>
              <p className="text-sm">Estadio</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Destination />
            <div className="flex-1">
              <label className="text-xs text-gray-600">Hasta</label>
              <p className="text-sm">UPB</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <Calendar />
              <div>
                <label className="text-xs text-gray-600">Fecha</label>
                <p className="text-sm">Hoy</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <People />
              <div>
                <label className="text-xs text-gray-600">Pasajeros</label>
                <p className="text-sm">1</p>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="/carpool"
          className="bg-red-500 text-white w-full block py-3 rounded-full text-center font-medium hover:bg-red-400"
        >
          Buscar viajes
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-10 justify-center my-20 px-4 md:px-0">
        <div className="flex flex-col gap-3 lg:max-w-72">
          <Coins />
          <div>
            <h3 className="text-red-500">
              Facilita el transporte entre estudiantes
            </h3>
            <p className="text-black">
              Los estudiantes que tienen vehículos pueden ofrecer sus viajes a
              otros estudiantes que necesitan transporte.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:max-w-72">
          <Check />
          <div>
            <h3 className="text-red-500">Desliza, haz clic, toca y ¡listo!</h3>
            <p className="text-black">
              ¡Reservar un viaje nunca ha sido tan fácil! Gracias a nuestra
              sencilla aplicación impulsada por una excelente tecnología, puedes
              reservar un viaje cerca de ti en solo minutos.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:max-w-72">
          <Emoji />
          <div>
            <h3 className="text-red-500">Confía con quién viajas.</h3>
            <p className="text-black">
              Revisamos perfiles e identificaciones, para que sepas con quién
              estás viajando y puedas reservar tu viaje con tranquilidad en
              nuestra plataforma segura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
