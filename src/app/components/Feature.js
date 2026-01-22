"use client";

import React from 'react';

const Feature = () => {
  return (
    /* Main container using the deep dark theme base */
    <div className="bg-[#030712] text-white min-h-screen selection:bg-blue-500/30">
      
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 py-24 px-6 relative">
        
        {/* Decorative background glow for the whole section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Left Content Area */}
        <div className="w-full md:w-1/2 space-y-8 relative z-10">
          <div className="space-y-4">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em]">
              Features
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Any language.
            </h2>
          </div>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg font-light">
            Connect to leading AI providers through one streamlined interface. 
            Compatible with existing OpenAI clients and offering an intuitive 
            <span className="text-blue-400 font-medium"> REST API</span>.
          </p>

          <div className="pt-4">
            <button className="group bg-white text-black px-8 py-4 rounded-xl font-bold text-sm flex items-center gap-3 transition-all duration-300 hover:bg-blue-50 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1">
              Get Started 
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
            </button>
          </div>
        </div>

        {/* Right Visual Area (GitHub Themed) */}
        <div className="w-full md:w-1/2 relative group">
          {/* External Border Frame (Glassmorphism) */}
          <div className="relative aspect-square bg-[#0b0f1a]/50 border border-white/10 rounded-[40px] flex items-center justify-center overflow-hidden backdrop-blur-sm shadow-2xl transition-all duration-500 group-hover:border-blue-500/30">
            
            {/* The "Nebula" Glow Effect from image_136c38.png */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,78,216,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Animated white glow behind the logo */}
            <div className="absolute w-64 h-64 bg-white/[0.03] blur-[80px] rounded-full group-hover:bg-blue-500/[0.06] transition-colors duration-700"></div>

            {/* GitHub SVG Logo */}
            <svg 
              className="w-48 h-48 text-white opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>

            {/* Grid Pattern Overlay (Subtle) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>
          </div>

          {/* Bottom badge accent similar to your "Protected by AES" look */}
          <div className="absolute -bottom-6 -right-6 bg-blue-600/10 border border-blue-500/20 backdrop-blur-md px-4 py-2 rounded-lg transition-transform duration-500 group-hover:translate-x-2">
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">
              Multi-Language Support
            </span>
          </div>
        </div>

      </section>

    </div>
  );
};

export default Feature;