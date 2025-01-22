import Image from "next/image";
import { UserIcon, BriefcaseIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Menu from "./components/Menu";
export default function Home() {
  return (
    <div className="min-h-screen bg-red-50 text-gray-900">
      {/* Navbar */}
      {/* <nav className="flex items-center justify-between gap-x-8 bg-custom-blue text-white py-4 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="pl-4 text-lg font-bold justify font-dmSerif italic text-lg">
          SELFCARE
        </div>
        <div className="flex space-x-6 pr-4">
          <a href="#about" className="hover:underline flex items-center gap-2">
            <UserIcon className="h-5 w-5" />
            Sobre mí
          </a>
          <a href="#projects" className="hover:underline flex items-center gap-2">
            <BriefcaseIcon className="h-5 w-5" />
Servicios          </a>
          <a href="#contact" className="hover:underline flex items-center gap-2">
            <EnvelopeIcon className="h-5 w-5" />
            Contacto
          </a>
          <a href="#contact" className="hover:underline flex items-center gap-2">
            <EnvelopeIcon className="h-5 w-5" />
            Agenda
          </a>
        </div>
      </nav> */}
<Menu />

      {/* About Section */}
      <section id="about" className="relative h-screen bg-white overflow-hidden">
        {/* Video de fondo */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 z-10 w-full min-full object-cover">
          <source src="selfcarevideo.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>

        {/* Overlay para mayor legibilidad */}
        <div className="absolute inset-0 bg-black/50 z-20"></div>

        {/* Contenido */}
        <div className="relative z-30 max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-8">SelfCare, quien soy</h2>
          <p className="text-lg">
           Depilación Laser | Tratamientos dermales | Limpieza facial | Asesoría dermatológica
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center text-black">
        <Image
          src="/perfil.jpeg"
          alt="Foto de Mateo Álvarez"
          width={192}
          height={192}
          className="object-cover rounded-full"
        />
        <h1 className="text-5xl font-bold mb-4">Hola, soy Agustina Di Bono</h1>
        <p className="text-xl max-w-2xl">
          Estudiante avanzada en Cosmetología Médica en la Facultad de Medicina
        </p>
        <div className="mt-8 flex space-x-4">
          <a
            href="https://www.linkedin.com/in/mateo-alvarez-b9b647195/"
            className="bg-pink-300 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://github.com"
            className="bg-green-300 hover:bg-green-900 text-white font-medium py-2 px-4 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-red-50-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Nuestros servicios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/perfil.jpeg" alt="Project 1" width={300} height={200} className="rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Depilacion</h3>
              <p className="text-gray-600 mb-4">Descripción breve del proyecto 1. He utilizado React, Node.js y MongoDB para crear esta aplicación.</p>
              <a href="http://localhost:3000/depilacion" className="text-blue-500 hover:underline">Ver más</a>
            </div>
            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/perfil.jpeg" alt="Project 2" width={300} height={200} className="rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Limpieza facial</h3>
              <p className="text-gray-600 mb-4">Esta aplicación fue construida con Next.js y Tailwind CSS.</p>
              <a href="#" className="text-blue-500 hover:underline">Ver más</a>
            </div>
            {/* Project 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/perfil.jpeg" alt="Project 3" width={300} height={200} className="rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Asesoría dermatologica </h3>
              <p className="text-gray-600 mb-4">Esta es una aplicación de una sola página con React y Redux.</p>
              <a href="#" className="text-blue-500 hover:underline">Ver más</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-red-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contacto</h2>
          <p className="text-lg mb-6">Si tienes algún proyecto o colaboración en mente, no dudes en contactarme.</p>
          <a href="mailto:contacto@miportafolio.com" className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-600 transition">Enviar un mensaje</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>&copy; 2024 Mateo Álvarez. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}