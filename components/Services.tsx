
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Webs y landing pages",
      description: "Diseñamos webs claras, rápidas y orientadas a convertir. Nada de plantillas genéricas ni proyectos eternos.",
      icon: (
        <svg className="w-8 h-8 text-nodus-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Contenido útil para tu negocio",
      description: "Creamos contenido que aporta valor y se puede reutilizar en varios canales.",
      icon: (
        <svg className="w-8 h-8 text-nodus-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: "Automatización e IA aplicada",
      description: "Aplicamos inteligencia artificial solo cuando tiene sentido. Primero entendemos el negocio. Luego proponemos soluciones.",
      icon: (
        <svg className="w-8 h-8 text-nodus-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="text-nodus-accent uppercase tracking-widest text-xs font-semibold">Servicios</span>
        <h2 className="text-4xl md:text-5xl font-editorial text-nodus-primary mt-4">Soluciones a medida</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white p-10 border border-nodus-border group hover:border-nodus-accent transition-all duration-500 shadow-sm hover:shadow-md">
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-xl font-editorial font-bold text-nodus-primary mb-4 group-hover:text-nodus-accent transition-colors">
              {service.title}
            </h3>
            <p className="text-nodus-textSec leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
