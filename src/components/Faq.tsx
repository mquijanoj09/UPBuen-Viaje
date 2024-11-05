export default function Faq() {
  return (
    <section className="py-10 md:py-20 px-4 md:px-56">
      <h2 className="text-center mb-6 md:mb-10 text-xl md:text-2xl font-bold">
        Carpool P&R
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div className="flex flex-col border-b border-gray-300 pb-5">
          <h3 className="text-red-500 text-base md:text-lg mb-2">
            ¿Cómo reservo un viaje compartido en coche?
          </h3>
          <p className="text-sm md:text-base">
            Puedes reservar un viaje compartido en la pagina web de UPBuen Viaje
            Simplemente busca tu destino, elige la fecha en la que deseas viajar
            y selecciona el viaje compartido que mejor se adapte a ti.
          </p>
        </div>
        <div className="flex flex-col border-b border-gray-300 pb-5">
          <h3 className="text-red-500 text-base md:text-lg mb-2">
            ¿Cómo publico un viaje compartido en coche?
          </h3>
          <p className="text-sm md:text-base">
            Ofrecer un viaje compartido en UPBuenVaje es fácil. Para publicar tu
            viaje, utiliza nuestra pagina web. Indica tus puntos de salida y
            llegada, la fecha y hora de salida,
          </p>
        </div>
        <div className="flex flex-col border-b border-gray-300 pb-5">
          <h3 className="text-red-500 text-base md:text-lg mb-2">
            ¿Cómo cancelo mi viaje compartido en coche?
          </h3>
          <p className="text-sm md:text-base">
            Si tienes un cambio de planes, siempre puedes cancelar tu viaje
            compartido desde la sección Tus viajes de nuestra aplicación. Cuanto
            antes canceles, mejor
          </p>
        </div>
        <div className="flex flex-col border-b border-gray-300 pb-5">
          <h3 className="text-red-500 text-base md:text-lg mb-2">
            Los beneficios de viajar en carpool incluyen:
          </h3>
          <p className="text-sm md:text-base">
            Hay múltiples ventajas en viajar en coche compartido en comparación
            con otros medios de transporte. Por lo general, viajar en carpool es
            más económico, especialmente para distancias más largas.
          </p>
        </div>
      </div>
    </section>
  );
}
