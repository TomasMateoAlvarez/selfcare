import Image from 'next/image';
import { EnvelopeIcon, CameraIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Menu from './components/Menu';

export default function Home() {
  return (
    <div className='min-h-screen bg-textura-fondo bg-cover bg-fixed bg-center text-gray-900'>
      {/* About Section */}
      <section
        id='about'
        className='relative h-[80vh] bg-white overflow-hidden flex flex-col md:flex-row items-center'
      >
        {/* Contenedor del video */}
        <div className='w-full md:w-1/2 flex items-center justify-center'>
          <video
            autoPlay
            muted
            loop
            playsInline
            className='w-[maxpx] h-[max] object-cover'
          >
            <source src='/selfcarevideo.MP4' type='video/mp4' />
            Tu navegador no soporta videos.
          </video>
        </div>

        {/* Contenedor del texto */}
        <div className='md:w-1/2 flex justify-center items-start p-6 overflow-auto'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-custom-pink text-center'>
              Máquina de Depilación Soprano
            </h2>
            <p className='text-base md:text-lg leading-relaxed text-gray-800 text-center'>
              La máquina de depilación Soprano es una tecnología avanzada que utiliza láser de diodo para 
              eliminar el vello de forma segura y efectiva. Su sistema de enfriamiento integrado minimiza las molestias durante el tratamiento y su método "in motion" garantiza una cobertura uniforme.
            </p>
            <p className='text-base md:text-lg leading-relaxed text-gray-800 text-center mt-2 md:mt-4'>
              Los resultados son duraderos, haciendo de esta opción una solución ideal para quienes buscan comodidad, seguridad y eficacia.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section
        id='hero'
        className='h-screen flex flex-col justify-center items-center text-center text-black'
      >
        {/* Contenido del Hero Section */}
      </section>

      {/* Services Section */}
      <section id='services' className='py-20 bg-gray-100'>
        <div className='max-w-5xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8'>Nuestros servicios</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <Image
                src='/depilacion.jpeg'
                alt='Depilación'
                width={300}
                height={200}
                className='rounded-md mb-4'
              />
              <h3 className='text-xl font-semibold mb-2'>Depilación</h3>
              <p className='text-gray-600 mb-4'>Breve información acerca de depilación.</p>
              <a href='/depilacion' className='text-blue-500 hover:underline'>
                Ver más
              </a>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <Image
                src='/perfil.jpeg'
                alt='Limpieza facial'
                width={300}
                height={200}
                className='rounded-md mb-4'
              />
              <h3 className='text-xl font-semibold mb-2'>Limpieza facial</h3>
              <p className='text-gray-600 mb-4'>Breve información acerca de limpieza facial.</p>
              <a href='/limpieza' className='text-blue-500 hover:underline'>
                Ver más
              </a>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <Image
                src='/asesoria.jpeg'
                alt='Asesoría dermatológica'
                width={300}
                height={200}
                className='rounded-md mb-4'
              />
              <h3 className='text-xl font-semibold mb-2'>Asesoría dermatológica</h3>
              <p className='text-gray-600 mb-4'>Breve información acerca de asesoría dermatológica.</p>
              <a href='/derma' className='text-blue-500 hover:underline'>
                Ver más
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 bg-white'>
        <div className='max-w-5xl mx-auto text-center space-y-4'>
          <h2 className='text-3xl font-bold mb-8'>Contacto</h2>
          <p className='text-lg mb-6'>Por consultas o reserva para servicio</p>
          <a
            href='mailto:contacto@miportafolio.com'
            className='text-blue-500 text-lg font-medium inline-flex items-center gap-2'
          >
            <EnvelopeIcon className='w-5 h-5' /> Enviar un mensaje
          </a>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-pink-500 text-lg font-medium inline-flex items-center gap-2'
          >
            <CameraIcon className='w-5 h-5' /> Instagram
          </a>
          <a
            href='https://wa.me/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-500 text-lg font-medium inline-flex items-center gap-2'
          >
            <PhoneIcon className='w-5 h-5' /> WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-6 bg-gray-900 text-white text-center'>
        <p>&copy; 2024 Mateo Álvarez. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
