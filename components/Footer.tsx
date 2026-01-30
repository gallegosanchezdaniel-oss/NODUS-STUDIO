
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-16 border-t border-nodus-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-editorial font-bold text-nodus-primary mb-6">NODUS</h3>
            <p className="text-nodus-textSec max-w-sm mb-6">
              Soluciones digitales para negocios reales. Ayudamos a pymes y profesionales a digitalizarse con criterio y eficiencia.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-nodus-primary mb-6">Explora</h4>
            <ul className="space-y-4">
              {['Servicios', 'Para quién', 'Cómo trabajamos', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g, '-').replace('í', 'i')}`} className="text-nodus-textSec hover:text-nodus-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-nodus-primary mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-nodus-textSec hover:text-nodus-accent transition-colors">Aviso legal</a></li>
              <li><a href="#" className="text-nodus-textSec hover:text-nodus-accent transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-nodus-textSec hover:text-nodus-accent transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-nodus-border flex flex-col md:flex-row justify-between items-center text-sm text-nodus-textSec">
          <p>&copy; {currentYear} NODUS. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0 italic font-editorial">Hecho con criterio en Galicia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
