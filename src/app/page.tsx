import Image from "next/image";

export default function Home() {
  return (
    <main className="fitems-center h-screen bg-red-100">
      <header className="flex items-center justify-between gap-10 py-3 px-72 z-50 bg-white w-full">
        <nav className="">
          <ul className="flex items-center justify-center cursor-pointer gap-14 font-semibold text-xl">
            <h3 className="hover:text-red-400">INICIO</h3>
            <h3 className="hover:text-red-400">NOSOTROS</h3>
            <h3 className="hover:text-red-400">PROYECTOS</h3>
            <h3 className="hover:text-red-400">SERVICIOS</h3>
            <h3 className="hover:text-red-400">BLOG</h3>
          </ul>
        </nav>
        <h3 className="cursor-pointer bg-red-400 text-white text-lg rounded-md p-2 shadow-sm hover:bg-blue-300 transition-colors">
          CONTÁCTANOS
        </h3>
      </header>
      <h1 className="text-5xl text-center text-red-400 mt-5">UPBuen Viaje</h1>
    </main>
  );
}
