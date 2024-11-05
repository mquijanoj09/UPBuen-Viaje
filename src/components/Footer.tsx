import Image from "next/image";
import logo from "../../public/images/logo-blanco.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white flex flex-col items-center justify-center gap-5 py-5 px-4 md:px-96 text-center">
      <Image src={logo} alt="Logo UPB" className="w-32 md:w-auto" />
      <div className="flex flex-wrap justify-center gap-5 text-xs md:text-sm">
        <a className="underline underline-offset-4">
          Repositorio Institucional
        </a>
        <a className="underline underline-offset-4">Terminos y condiciones</a>
        <a className="underline underline-offset-4">Poliza de privacidad</a>
        <a className="underline underline-offset-4">
          Política de Seguridad de la Información
        </a>
      </div>
      <p className="text-[10px] md:text-xs">
        Acreditación Institucional de Alta Calidad Multicampus.
      </p>
      <p className="text-[8px] md:text-[9px]">
        Universidad sujeta a inspección y vigilancia por el Ministerio de
        Educación Nacional. Resolución 17228 del 24 de octubre de 2018 - 6 años.
        Otorgado por el Ministerio de Educación Nacional. Nit UPB:
        890.902.922-6. Todos los derechos reservados
      </p>
    </footer>
  );
}
