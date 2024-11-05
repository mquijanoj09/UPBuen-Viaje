import React from "react";
import { Button } from ".";
import Image from "next/image";
import img from "../../public/images/imagen.png";
import img1 from "../../public/images/imagen1.png";

export default function TextSections() {
  return (
    <section>
      <div className="text-white flex flex-col md:flex-row items-center justify-center gap-10 bg-red-500 w-full p-4 md:p-10">
        <Image
          src={img}
          alt="Imagen personas"
          className="w-full md:w-auto h-auto"
        />
        <div className="flex flex-col gap-5 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold">
            Ayúdanos a mantenerte a salvo de estafas.
          </h2>
          <p className="max-w-md text-sm md:text-base">
            En UPBuenViaje, estamos trabajando arduamente para hacer nuestra
            plataforma tan segura como sea posible. Pero cuando ocurran estafas,
            queremos que sepas exactamente cómo evitarlas y reportarlas. Sigue
            nuestros consejos para ayudarnos a mantenerte seguro.
          </p>
          <Button className="bg-white text-red-500 hover:bg-red-100 w-full md:w-auto">
            Aprende más
          </Button>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 p-4 md:p-10">
        <div className="flex flex-col gap-5 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold">
            Recibe bonos de fidelidad en la universidad.
          </h2>
          <p className="text-sm md:text-base">
            Los estudiantes pueden recibir bonos de fidelidad por el buen uso de
            la app.
          </p>
          <Button className="bg-red-500 text-white hover:bg-red-400 w-full md:w-auto">
            Aprende más
          </Button>
        </div>
        <Image
          src={img1}
          alt="Imagen personas"
          className="w-full md:w-auto h-auto"
        />
      </div>
    </section>
  );
}
