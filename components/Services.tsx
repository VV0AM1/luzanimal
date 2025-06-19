

export default function Services() {
  return (
    <section id="servicios" className="bg-pink-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Nuestros Servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <article className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-pink-600">
              Cremación Individual
            </h3>
            <p className="text-gray-600">
              Un servicio personalizado donde tu mascota es cremado individualmente y las cenizas se entregan en urna.
            </p>
          </article>

          <article className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-pink-600">
              Cremación Colectiva
            </h3>
            <p className="text-gray-600">
              Opción más económica con cremación en grupo, respetando siempre la dignidad de tu mascota.
            </p>
          </article>

          <article className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-pink-600">
              Asesoramiento y Apoyo
            </h3>
            <p className="text-gray-600">
              Te acompañamos en el proceso con atención personalizada y comprensión.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}