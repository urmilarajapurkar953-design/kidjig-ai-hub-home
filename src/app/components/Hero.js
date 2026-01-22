import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#030712] overflow-hidden px-4">
      
      <div className="absolute inset-0 z-0">
       
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      
      <div className="relative z-10 w-full max-w-5xl p-8 md:p-20 rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] group">
        
        <div className="text-center max-w-3xl mx-auto">
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6">
            Enterprise <br />
            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
              AI Gateway
            </span>
          </h1>

          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
            Unify, secure, and scale your enterprise AI infrastructure through a 
            single, powerful gateway. Access and manage multiple AI providers 
            with enterprise-grade security.
          </p>

         
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="relative group/btn overflow-hidden bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                Get API Keys 
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </span>
            </button>

            <button className="px-8 py-4 rounded-full font-semibold text-white border border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-white/40 flex items-center gap-2 active:scale-95">
              Schedule Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </button>
          </div>
        </div>

        
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-white/10 rounded-tl-[40px] group-hover:border-blue-500/50 transition-colors duration-700"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-white/10 rounded-br-[40px] group-hover:border-purple-500/50 transition-colors duration-700"></div>
      </div>
    </section>
  );
};

export default Hero;