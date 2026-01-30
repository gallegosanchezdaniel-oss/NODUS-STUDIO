
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { title: "Escuchamos", desc: "Entendemos la realidad de tu negocio, tus frenos y tus objetivos reales." },
    { title: "Proponemos", desc: "Diseñamos una hoja de ruta pragmática. Solo lo que necesitas, nada más." },
    { title: "Ejecutamos", desc: "Construimos soluciones con agilidad, manteniendo la calidad y el detalle." },
    { title: "Entregamos y acompañamos", desc: "No te dejamos solo. Nos aseguramos de que todo funcione y evolucione." }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-left mb-20 flex flex-col md:flex-row md:items-end md:justify-between border-b border-nodus-border pb-10">
        <div>
          <span className="text-nodus-accent uppercase tracking-[0.3em] text-xs font-bold">Cómo trabajamos</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-editorial text-nodus-primary mt-4">Un proceso transparente</h2>
        </div>
        <div className="mt-6 md:mt-0 max-w-sm">
          <p className="text-nodus-textSec leading-relaxed">
            Metodología ágil pero rigurosa. Sin terminología innecesaria, centrados en el resultado final.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-16">
        {steps.map((step, idx) => (
          <div key={idx} className="group">
            <div className="text-5xl font-editorial font-black text-nodus-accent/20 mb-6 transition-colors group-hover:text-nodus-accent/40 select-none">
              0{idx + 1}
            </div>
            <div className="relative">
              <h3 className="text-xl font-editorial font-bold text-nodus-primary mb-4 border-l-2 border-nodus-accent pl-4">{step.title}</h3>
              <p className="text-nodus-textSec leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
