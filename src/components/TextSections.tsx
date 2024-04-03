import React from "react";
import { Button } from ".";
import Image from "next/image";
import img from "../../public/images/imagen.png";
import img1 from "../../public/images/imagen1.png";
import Link from "next/link";

export default function TextSections() {
  return (
    <section>
      <div className="text-white flex items-center justify-center gap-10 bg-red-500 w-full p-10">
        <Image src={img} alt="Imagen personas"></Image>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">
            Ayúdanos a mantenerte a salvo de estafas.
          </h2>
          <p className="max-w-md">
            En UPBuenViaje, estamos trabajando arduamente para hacer nuestra
            plataforma tan segura como sea posible. Pero cuando ocurran estafas,
            queremos que sepas exactamente cómo evitarlas y reportarlas. Sigue
            nuestros consejos para ayudarnos a mantenerte seguro.
          </p>
          <Link href={"/seguridad"}>
            <Button className="bg-white text-red-500 hover:bg-red-100">
              Aprende más
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-10 p-10">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">
            Recibe bonos de fidelidad en la universidad.
          </h2>
          <p>
            Los estudiantes pueden recibir bonos de fidelidad por el buen uso de
            la app.
          </p>
          <Link href={"/bonos"}>
            <Button className="bg-red-500 text-white hover:bg-red-400">
              Aprende más
            </Button>
          </Link>
        </div>
        <Image src={img1} alt="Imagen personas"></Image>
      </div>
    </section>
  );
}
