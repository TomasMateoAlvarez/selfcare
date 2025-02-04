"use client";
import Menu from "../components/Menu";
import { EnvelopeIcon, CameraIcon, PhoneIcon } from '@heroicons/react/24/outline'; // Asegúrate de tener estos íconos instalados
import { Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function depilacion() {
  return (
    <div className="min-h-screen bg-textura-fondo bg-cover bg-fixed bg-center text-gray-900 flex flex-col">
      <Menu />

      {/* Sección principal */}
      <div className="flex-grow">
    <div className="bg-white rounded-lg shadow-lg p-8 mx-4 my-8">
      {/* En móviles se apilan, en desktop se dividen en dos columnas */}
      <div className="flex flex-col md:flex-row pt-32 gap-8">
        {/* Columna Izquierda: Swiper como imagen principal */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Navigation, Pagination, Autoplay]}
            >
              <SwiperSlide>
                <img
                  src="/depilacion.jpeg"
                  alt="Imagen 1"
                  className="w-full rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/perfil.jpeg"
                  alt="Imagen 2"
                  className="w-full rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/asesoria.jpeg"
                  alt="Imagen 3"
                  className="w-full rounded-lg shadow-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Columna Derecha: Texto descriptivo */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Servicio 1</h1>
          <p className="text-lg mb-4">
            Aquí puedes detallar toda la información acerca del servicio 1, incluyendo
            beneficios, precios y más.
          </p>
          <p className="text-lg">
            Este servicio está diseñado para ofrecerte los mejores resultados, utilizando
            técnicas avanzadas y productos de alta calidad.
          </p>
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
