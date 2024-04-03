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

export default function MainSection() {
  return (
    <section className="text-red-500 mt-20">
      <h1 className="text-white text-4xl font-semibold text-center absolute z-10 w-full mt-5">
        Viaja de manera segura a la U!
      </h1>
      <Image src={img3} alt="Logo UPBuenViaje" className="relative" />
      <div className="rounded-full bg-red-100 gap-10 flex items-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
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
        <Button className="bg-red-500 text-white rounded-l-none w-32 hover:bg-red-400">
          Buscar
        </Button>
      </div>
      <div className="flex gap-10 justify-center my-20">
        <div className="flex flex-col gap-3 max-w-72">
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
        <div className="flex flex-col gap-3 max-w-72">
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
        <div className="flex flex-col gap-3  max-w-72">
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
