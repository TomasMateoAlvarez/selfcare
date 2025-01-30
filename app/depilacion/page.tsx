import Menu from "../components/Menu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
                src="/perfil.jpeg"
                alt="Descripción de la imagen"
                className="rounded-lg shadow-lg"
                width={800}
                height={1200}
              />
            </div>

            {/* Columna de Swiper */}
            <div className="w-full md:w-1/2">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
              >
                <SwiperSlide>
                  <img
                    src="/imagen1.jpg"
                    alt="Imagen 1"
                    className="w-full rounded-lg shadow-lg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/imagen2.jpg"
                    alt="Imagen 2"
                    className="w-full rounded-lg shadow-lg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/imagen3.jpg"
                    alt="Imagen 3"
                    className="w-full rounded-lg shadow-lg"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Columna de Texto */}
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">Servicio 1</h1>
              <p className="text-lg mb-4">
                Aquí puedes detallar toda la información acerca del servicio 1, incluyendo beneficios, precios y más.
              </p>
              <p className="text-lg">
                Este servicio está diseñado para ofrecerte los mejores resultados, utilizando técnicas avanzadas y productos de alta calidad.
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
