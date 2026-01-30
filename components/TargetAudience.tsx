
import React from 'react';

const TargetAudience: React.FC = () => {
  const groups = [
    { title: "Pymes", desc: "Negocios que buscan consolidar su presencia digital con herramientas que de verdad funcionan." },
    { title: "Negocios locales", desc: "Establecimientos que necesitan que el cliente los encuentre y confíe en su servicio." },
    { title: "Profesionales y despachos", desc: "Expertos que requieren una imagen sobria, profesional y un sistema de gestión eficiente." },
    { title: "Webs obsoletas", desc: "Proyectos que se quedaron atrás y necesitan una renovación total sin complicaciones técnicas." }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left: Text and List */}
        <div className="lg:col-span-5">
          <span className="text-nodus-accent uppercase tracking-widest text-xs font-bold">Para quién</span>
          <h2 className="text-4xl md:text-5xl font-editorial text-nodus-primary mt-4 mb-8">Compañeros de viaje</h2>
          <p className="text-lg text-nodus-textSec mb-10 leading-relaxed font-sans">
            “Trabajamos con personas que valoran el tiempo y la claridad. Si buscas un socio tecnológico que hable tu mismo idioma, estás en el lugar adecuado.”
          </p>
          
          <div className="space-y-6">
            {groups.map((group, idx) => (
              <div key={idx} className="group p-6 bg-nodus-bg hover:bg-white border-l-2 border-transparent hover:border-nodus-accent transition-all duration-300">
                <h3 className="text-xl font-editorial font-bold text-nodus-primary mb-2">{group.title}</h3>
                <p className="text-nodus-textSec text-sm leading-relaxed">{group.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right: Sector Images */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8 flex flex-col justify-center">
            <div className="relative overflow-hidden group shadow-xl">
              <img 
                src="/images/ia.jpg"
                alt="Sector Asesoría" 
                className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-nodus-primary/20 group-hover:bg-transparent transition-all" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-nodus-primary/80 to-transparent">
                <p className="text-white font-editorial italic text-lg">Profesionales y despachos</p>
                <p className="text-white/60 text-xs uppercase tracking-widest mt-1">Análisis y método</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="relative overflow-hidden group shadow-xl">
              <img 
                src="/images/webs.jpg" 
                alt="Webs y landings" 
                className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-nodus-primary/20 group-hover:bg-transparent transition-all" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-nodus-primary/80 to-transparent">
                <p className="text-white font-editorial italic text-lg">Negocios de proximidad</p>
                <p className="text-white/60 text-xs uppercase tracking-widest mt-1">Gestión y control</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;
