"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react'; // Íconos del menú
const Menu = () => {
  const handleClick = () => {
    // Define what should happen when a link is clicked
  };
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el menú

  return (
    <nav className="shadow-lg border-b-2 bg-custom-blue text-white py-2 fixed top-0 left-0 w-full z-50 text-black">
      <div className="flex items-center justify-between px-4 md:px-8">
        
        {/* Logo */}
        <div className="font-bold text-custom-pink font-seasons text-3xl md:text-5xl text-center">
          <div>SELFCARE</div>
          <div className="text-sm font-medium text-gray-700 tracking-wide">
            Higiene Facial | Peeling | Dermaplaning
          </div>
        </div>

        {/* Botón Hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          {isOpen ? <CloseIcon size={30} /> : <MenuIcon size={30} />}
        </button>

        {/* Menú (pantallas grandes) */}
        <NavLink href="/#about" text="Sobre mí" onClick={handleClick} />
  <NavLink href="/#services" text="Servicios" onClick={handleClick} />
  <NavLink href="/#contact" text="Contacto" onClick={handleClick} />
  <NavLink href="/derma#schedule" text="Agenda" onClick={handleClick} />

      </div>

      {/* Menú desplegable (pantallas pequeñas) */}
      {isOpen && (
        <div className="md:hidden bg-custom-blue text-black font-bold space-y-4 py-4 px-6 text-center transition-all duration-300">
          <NavLink href="/#about" text="Sobre mí" onClick={() => setIsOpen(false)} />
          <NavLink href="/#services" text="Servicios" onClick={() => setIsOpen(false)} />
          <NavLink href="/#contact" text="Contacto" onClick={() => setIsOpen(false)} />
          <NavLink href="/derma#schedule" text="Agenda" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
};

// Componente para los enlaces
interface NavLinkProps {
  href: string;
  text: string;
  onClick: () => void;
}

const NavLink = ({ href, text, onClick }: NavLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className="hover:underline hover:text-custom-pink transition-colors"
  >
    {text}
  </Link>
);

export default Menu;
