
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div>
        <span className="text-nodus-accent uppercase tracking-widest text-xs font-semibold">Contacto</span>
        <h2 className="text-4xl md:text-5xl font-editorial text-nodus-primary mt-4 mb-6">Hablemos de tu caso</h2>
        <p className="text-lg text-nodus-textSec mb-10 leading-relaxed">
          Cuéntanos qué necesitas y te diremos si podemos ayudarte (y cómo). Respondemos en menos de 24 horas laborables.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-nodus-secondary shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-nodus-textSec font-bold">Email</p>
              <a href="mailto:hola@nodus.digital" className="text-nodus-primary font-medium hover:text-nodus-accent transition-colors">hola@nodus.digital</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-[#25D366] shadow-sm">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-nodus-textSec font-bold">WhatsApp</p>
              <a href="https://wa.me/34600000000" className="text-nodus-primary font-medium hover:text-nodus-accent transition-colors">Abrir chat directo</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-8 md:p-12 shadow-sm border border-nodus-border">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-nodus-primary mb-2">Nombre</label>
              <input type="text" className="w-full px-4 py-3 bg-nodus-bg border border-transparent focus:border-nodus-accent focus:bg-white outline-none transition-all rounded-sm" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-sm font-medium text-nodus-primary mb-2">Empresa</label>
              <input type="text" className="w-full px-4 py-3 bg-nodus-bg border border-transparent focus:border-nodus-accent focus:bg-white outline-none transition-all rounded-sm" placeholder="Nombre de tu negocio" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-nodus-primary mb-2">Email de contacto</label>
            <input type="email" className="w-full px-4 py-3 bg-nodus-bg border border-transparent focus:border-nodus-accent focus:bg-white outline-none transition-all rounded-sm" placeholder="email@ejemplo.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-nodus-primary mb-2">¿En qué podemos ayudarte?</label>
            <textarea rows={4} className="w-full px-4 py-3 bg-nodus-bg border border-transparent focus:border-nodus-accent focus:bg-white outline-none transition-all rounded-sm resize-none" placeholder="Breve descripción de tu proyecto..."></textarea>
          </div>
          <button className="w-full py-4 bg-nodus-primary text-white font-bold hover:bg-opacity-95 transition-all shadow-md">
            Enviar mensaje
          </button>
          <p className="text-xs text-nodus-textSec text-center">
            Al enviar este formulario aceptas nuestra política de privacidad.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
