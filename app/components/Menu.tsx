import Link from 'next/link';

const Menu = () => {
  return (
    <nav className="shadow-lg border-b-2 space-x-10 flex items-center justify-center gap-x-9 bg-custom-blue text-white py-1 fixed top-0 left-0 w-full z-50 text-black">
      <div className="pl-4 font-bold text-custom-pink font-seasons text-5xl flex-shrink-0 ml-1 text-center">
        <div>SELFCARE</div>
        <div className="text-sm font-medium text-gray-700 tracking-wide">
          Higiene Facial | Peeling | Dermaplaning
        </div>
      </div>
      <div className="flex space-x-10 pr-4 text-black font-bold">
        <Link href="/#about" className="hover:underline flex items-center gap-2 hover:text-custom-pink transition-colors">
          Sobre mí
        </Link>
        <Link href="/#services" className="hover:underline flex items-center gap-2 hover:text-custom-pink transition-colors">
          Servicios
        </Link>
        <Link href="/#contact" className="hover:underline flex items-center gap-2 hover:text-custom-pink transition-colors">
          Contacto
        </Link>
        <Link href="/derma#schedule" className="hover:underline flex items-center gap-2 hover:text-custom-pink transition-colors">
          Agenda
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
