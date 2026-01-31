
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-nodus-primary">
      {/* Background Image - Editorial Aerial Forest Feel */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: `linear-gradient(rgba(21, 59, 46, 0.5), rgba(21, 59, 46, 0.7)), url('/images/hero.jpg')` 
        }}
      />
      
      {/* Editorial SVG Overlay Lines */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        {/* Linea vertical 44% */}
        <line x1="44%" y1="0" x2="44%" y2="100%" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
        
        {/* Linea vertical 72% */}
        <line x1="72%" y1="0" x2="72%" y2="100%" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
        
        {/* Subrayado corto bajo el claim (a la derecha) - starts after 72% */}
        <line x1="73%" y1="58%" x2="80%" y2="58%" stroke="#D9B25F" strokeWidth="2" />
        
        {/* Corner bracket bottom right */}
        <path d="M 92% 92% L 96% 92% L 96% 88%" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
      </svg>

      {/* Hero Content Wrapper */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 h-full flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-10 gap-0 items-center">
          
          {/* Logo Left - Huge and Typographic */}
          <div className="md:col-span-4 flex flex-col justify-center">
            <h1 className="text-8xl md:text-[12rem] lg:text-[16rem] font-editorial text-white leading-none tracking-tighter select-none opacity-95">
              NODUS
            </h1>
            <div className="mt-6 md:mt-10 max-w-sm">
              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light font-sans">
                Webs profesionales, contenido útil y automatización práctica para pymes que quieren orden, visibilidad y eficiencia. Sin humo. Sin complicaciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href="#contacto" 
                  className="px-8 py-3 bg-nodus-primary text-white border border-white/30 hover:bg-white hover:text-nodus-primary transition-all font-semibold text-center rounded-sm"
                >
                  Solicitar presupuesto
                </a>
                <a 
                  href="https://wa.me/34600000000" 
                  className="px-8 py-3 bg-nodus-accent text-nodus-text hover:bg-opacity-90 transition-all font-semibold text-center rounded-sm"
                >
                  Hablar con un especialista
                </a>
              </div>
            </div>
          </div>

          {/* Claim Right - Positioned specifically */}
          <div className="md:col-start-7 md:col-span-4 mt-16 md:mt-0 pl-4 md:pl-8 border-l border-white/10 md:border-none">
  
              SOLUCIONES DIGITALES PARA NEGOCIOS REALES
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-editorial text-white leading-[1.1] font-medium">
              Soluciones digitales <br />
              para negocios reales
            </h2>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/50">
        <span className="text-[9px] uppercase tracking-[0.4em] mb-2 font-semibold">Scroll</span>
        <div className="animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
