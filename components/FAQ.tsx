
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const questions = [
    { q: "¿Cuánto cuesta una web?", a: "Depende de la complejidad, pero nuestros proyectos suelen partir de una inversión base pensada para pymes. Buscamos el equilibrio entre profesionalidad y rentabilidad." },
    { q: "¿Tengo que pagar mantenimiento mensual?", a: "No es obligatorio. Te entregamos una web que puedes gestionar tú mismo. Si prefieres que nos encarguemos nosotros de la seguridad y actualizaciones, tenemos planes flexibles." },
    { q: "¿Puedo empezar solo con una landing?", a: "Absolutamente. Es la mejor forma de validar una idea o un servicio concreto sin realizar una inversión inicial masiva." },
    { q: "¿Creáis el contenido o tengo que aportarlo yo?", a: "Podemos hacerlo nosotros. Tenemos especialistas en contenido útil que investigan tu sector para que la web no esté vacía de significado." },
    { q: "¿Trabajáis solo en Galicia?", a: "Nuestras raíces están en Galicia, pero trabajamos con clientes de toda España gracias a herramientas de colaboración digital." },
    { q: "¿La IA es obligatoria?", a: "En absoluto. Solo la implementamos si realmente aporta una ventaja competitiva o ahorra tiempo en tareas repetitivas." }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <span className="text-nodus-accent uppercase tracking-widest text-xs font-semibold">FAQ</span>
        <h2 className="text-4xl md:text-5xl font-editorial text-nodus-primary mt-4">Preguntas frecuentes</h2>
      </div>
      <div className="space-y-4">
        {questions.map((item, idx) => (
          <div key={idx} className="border-b border-nodus-border">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
            >
              <span className={`text-lg font-medium transition-colors ${openIdx === idx ? 'text-nodus-accent' : 'text-nodus-primary'}`}>
                {item.q}
              </span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-nodus-accent' : 'text-nodus-textSec'}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-40 pb-6' : 'max-h-0'}`}>
              <p className="text-nodus-textSec leading-relaxed">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
