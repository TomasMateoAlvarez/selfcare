import Menu from "../components/Menu";
import { EnvelopeIcon, CameraIcon, PhoneIcon } from '@heroicons/react/24/outline'; // Asegúrate de tener estos íconos instalados

export default function depilacion() {
  return (
    <div className="min-h-screen bg-textura-fondo bg-cover bg-fixed bg-center text-gray-900 flex flex-col">
      <Menu />

      {/* Sección principal */}
      <div className="flex-grow">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row pt-32 items-center md:items-start gap-8">
            {/* Columna de Imagen */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/perfil.jpeg" // Cambia esto por la URL de tu imagen
                alt="Descripción de la imagen"
                className="rounded-lg shadow-lg"
                width={800}
                height={1200}
              />
            </div>

            {/* Columna de Texto */}
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">Servicio 1</h1>
              <p className="text-lg mb-4">
                Aquí puedes detallar toda la información acerca del servicio 1, incluyendo beneficios, precios y más.
              </p>
              <p className="text-lg">
              Este servicio está diseñado para ofrecerte los mejores resultados, utilizando técnicas avanzadas y productos de alta calidad.
              Este servicio está diseñado para ofrecerte los mejores resultados, utilizando técnicas avanzadas y productos de alta calidad.
              Este servicio está diseñado para ofrecerte los mejores resultados, utilizando técnicas avanzadas y productos de alta calidad.
              Este servicio está diseñado para ofrecerte los mejores resultados, utilizando técnicas avanzadas y productos de alta calidad.
              Este servicio está diseñado para ofrecerte los mejores resultados, utilizando técnicas avanzadas y productos de alta calidad.
              Este servicio está diseñado para ofrecerte los mejores resultados, utilizando técnicas avanzadas y productos de alta calidad.
              Este servicio está diseñado para ofrecerte los mejores resultados, utilizando técnicas avanzadas y productos de alta calidad.
              Este servicio está diseñado para ofrecerte los mejores resultados, utilizando técnicas avanzadas y productos de alta calidad.
              </p>

              {/* Opciones de Contacto */}
              <div className="mt-8 space-y-6 space-x-6">
                <a
                  href="mailto:contacto@miportafolio.com"
                  className="text-blue-500 text-lg font-medium inline-flex items-center gap-2 focus:text-blue-700"
                >
                  <EnvelopeIcon className="w-5 h-5" />
                  Enviar un mensaje
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-pink-500 text-lg font-medium inline-flex items-center gap-2 focus:text-pink-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CameraIcon className="w-5 h-5" />
                  Instagram
                </a>
                <a
                  href="https://wa.me/"
                  className="text-green-500 text-lg font-medium inline-flex items-center gap-2 focus:text-green-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        id="contacto"
        className="h-[50vh] flex flex-col justify-center items-center text-center text-black"
      ></section>

      {/* Footer */}
      <footer className="py-6 bg-custom-pink text-white text-center mt-auto">
        <p>&copy; 2024 Mateo Álvarez. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
