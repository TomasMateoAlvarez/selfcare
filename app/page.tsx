import Image from "next/image";
import { UserIcon, BriefcaseIcon, EnvelopeIcon,CameraIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Menu from "./components/Menu";

export default function Home() {
  return (
    <div className="min-h-screen bg-textura-fondo bg-cover bg-fixed bg-cover bg-center text-gray-900">
      {/* Navbar */}
<Menu />
      {/* About Section */}
      
      
      <section id="about" className="relative h-screen bg-white overflow-hidden flex items-center">
  {/* Video o Imagen de fondo */}
  <div className="w-1/2 h-full flex items-center justify-center">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="selfcarevideo.mp4" type="video/mp4" />
      Tu navegador no soporta videos.
    </video>
    {/* Alternativa: Imagen de fondo */}
    {/* <Image
      src="/portada.png" // Ruta de la imagen de portada
      alt="Imagen de portada"
      objectFit="cover" // La imagen se ajustará para cubrir el área sin deformarse
      width={900}
      height={70}
      className="w-full h-full object-cover"
    /> */}
  </div>

  {/* Contenido de texto */}
  <div className="w-1/2 h-full flex justify-center items-center p-12 bg-gray-100">
  <div>
      <h2 className="text-4xl font-bold mb-6 text-custom-pink text-center">
        Máquina de Depilación Soprano
      </h2>
      <p className="text-lg leading-relaxed text-gray-800 text-center">
        La máquina de depilación Soprano es una tecnología avanzada que utiliza láser de diodo para 
        eliminar el vello de forma segura y efectiva. Este equipo permite tratar todo tipo de pieles, 
        incluso las más sensibles, y es adecuado para cualquier época del año.
      </p>
      <p className="text-lg leading-relaxed text-gray-800 text-center mt-4">
        Una de las principales ventajas del Soprano es su sistema de enfriamiento integrado, 
        que minimiza las molestias durante el tratamiento. Además, su método "in motion" garantiza 
        una cobertura uniforme, evitando áreas desiguales o dolorosas. 
      </p>
      <p className="text-lg leading-relaxed text-gray-800 text-center mt-4">
        Los resultados son duraderos, con una reducción significativa del vello desde las primeras 
        sesiones. Es una opción ideal para quienes buscan comodidad, seguridad y eficacia en 
        sus tratamientos de depilación.
      </p>
    </div>
  </div>
</section>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center text-black">
      
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Nuestros servicios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/depilacion.jpeg" alt="Project 1" width={300} height={200} className="rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Depilacion</h3>
              <p className="text-gray-600 mb-4">Breve información acerca dpilacion</p>
              <a href="#" className="text-blue-500 hover:underline">Ver más</a>
            </div>
            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/perfil.jpeg" alt="Project 2" width={300} height={200} className="rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Limpieza facial</h3>
              <p className="text-gray-600 mb-4">Breve información acerca de limpieza facial</p>
              <a href="#" className="text-blue-500 hover:underline">Ver más</a>
            </div>
            {/* Project 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/asesoria.jpeg" alt="Project 3" width={300} height={200} className="rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Asesoría dermatologica </h3>
              <p className="text-gray-600 mb-4">Breve información acerca dpilacion</p>
              <a href="#" className="text-blue-500 hover:underline">Ver más</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
  <div className="max-w-5xl mx-auto text-center space-x-4">
    <h2 className="text-3xl font-bold mb-8">Contacto</h2>
    <p className="text-lg mb-6">Por consultas o reserva para servicio</p>
    
    {/* Correo */}
    <a
      href="mailto:contacto@miportafolio.com"
      className="text-blue-500 text-lg font-medium inline-flex items-center gap-2 focus:text-blue-700"
    >
      <EnvelopeIcon className="w-5 h-5" />
      Enviar un mensaje
    </a>
    
    {/* Instagram */}
    <a
      href="https://www.instagram.com/"
      className="text-pink-500 text-lg font-medium inline-flex items-center gap-2 focus:text-pink-700"
      target="_blank"
      rel="noopener noreferrer"
    >
      <CameraIcon className="w-5 h-5" />
      Instagram
    </a>

    {/* WhatsApp */}
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
</section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>&copy; 2024 Mateo Álvarez. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}