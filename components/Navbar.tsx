
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Left */}
        <a href="#" className={`text-2xl font-editorial font-bold tracking-tight transition-colors duration-500 ${scrolled ? 'text-nodus-primary' : 'text-white'}`}>
          NODUS
        </a>

        {/* Links Right */}
        <div className="hidden md:flex items-center space-x-10">
          {[
            { label: 'Servicios', href: '#servicios' },
            { label: 'Para quién', href: '#para-quien' },
            { label: 'Cómo trabajamos', href: '#como-trabajamos' },
            { label: 'Contacto', href: '#contacto' }
          ].map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                scrolled 
                ? 'text-nodus-secondary hover:text-nodus-primary' 
                : 'text-white/80 hover:text-white hover:tracking-[0.25em]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contacto" 
            className={`px-6 py-3 text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded-sm border ${
              scrolled 
              ? 'bg-nodus-primary text-white border-nodus-primary hover:bg-transparent hover:text-nodus-primary' 
              : 'bg-white text-nodus-primary border-white hover:bg-transparent hover:text-white'
            }`}
          >
            Solicitar presupuesto
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className={`p-2 transition-colors ${scrolled ? 'text-nodus-primary' : 'text-white'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
