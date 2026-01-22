import React from 'react';

const GatewaySection = () => {
  return (
    <section className="relative w-full h-[50vh] flex flex-col items-center justify-center bg-[#030712] overflow-hidden px-6 border-t border-white/5">
      
     
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]"></div>
      </div>

      <div className="relative z-10 text-center space-y-6 max-w-4xl">
        
        <span className="text-gray-500 font-medium tracking-widest text-xs uppercase">
          Code
        </span>

        
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Single Gateway <span className="text-gray-400">to All Models</span>
        </h2>

        
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Connect to leading AI providers through one streamlined interface. 
          Compatible with existing OpenAI clients.
        </p>

       
        <div className="flex items-center justify-center gap-8 pt-4">
          <button className="group relative flex items-center gap-2 bg-[#e2e8f0] hover:bg-white text-black px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 active:scale-95 shadow-lg shadow-white/5">
            Get Started
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 font-medium">
            Visit the docs
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

     
      <div className="absolute top-0 left-12 w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent"></div>
    </section>
  );
};

export default GatewaySection;