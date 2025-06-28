import { FaMapMarkerAlt, FaPhoneAlt, FaApple, FaGoogle, FaHeart } from 'react-icons/fa';

export default function PetCrematoriumInfo() {
  return (
    <section id='contacto' className="bg-gray-900 text-white py-10 px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 animate-fade-in">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Tanatorio de mascotas en Barcelona
          </h2>
          <p className="text-gray-300">
            Carrer de Severo Ochoa, 43, Granollers
          </p>

          <div className="flex gap-4 mt-12">
            <a
              href="https://maps.apple.com/?address=Carrer%20de%20Severo%20Ochoa,%2046,%20Granollers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded transition"
            >
              <FaApple /> Apple Maps
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Carrer+de+Severo+Ochoa,+46,+Granollers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded transition"
            >
              <FaGoogle /> Google Maps
            </a>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full md:w-auto">
          <div className="flex items-center gap-3 mb-2">
            <FaHeart className="text-pink-400 animate-pulse" />
            <h3 className="text-lg font-semibold">¿Ha muerto una mascota?</h3>
          </div>
          <p className="text-gray-300 mb-4">
            Soporte personal a cada cliente <br/> <strong className="text-white">24/7</strong>
          </p>
          <a
            href="https://wa.me/34684418499"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full transition"
          >
            <FaPhoneAlt /> +34 684 418 499
          </a>
        </div>
      </div>
    </section>
  );
}