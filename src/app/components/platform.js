"use client";

import React from 'react';

const Platform = () => {
  return (
    <div className="bg-[#030712] text-white min-h-screen selection:bg-blue-500/30 font-sans overflow-x-hidden">
      
      
      <section className="relative pt-40 pb-32 px-6 flex flex-col items-center justify-center min-h-[80vh]">
        
        
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] opacity-40 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(29, 78, 216, 0.15) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
          
          <span className="text-gray-500 text-sm font-bold uppercase tracking-[0.5em] block animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Platform
          </span>
          
          
          <h1 className="text-6xl md:text-[100px] font-bold tracking-tighter leading-[0.9] bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">
            Everything you need <br className="hidden md:block" /> for your API
          </h1>
          
          
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Our platform simplifies the API-building process, allowing you to 
            <span className="text-white font-normal px-1">monetize</span>, 
            <span className="text-white font-normal px-1">analyze</span>, and 
            <span className="text-white font-normal px-1">protect</span> endpoints.
          </p>
          
          
          <div className="pt-8">
            <button className="group relative bg-[#f8fafc] text-black px-12 py-5 rounded-2xl font-bold text-sm transition-all duration-500 hover:bg-white hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] flex items-center gap-3 mx-auto overflow-hidden">
             
              <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <span className="relative z-10">Get Started</span>
              <span className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
            </button>
          </div>
        </div>

        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </section>

    </div>
  );
};

export default Platform;