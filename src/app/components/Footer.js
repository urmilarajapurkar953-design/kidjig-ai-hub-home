"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const footerData = {
    Developers: [
      { name: "Files", href: "#" },
      { name: "Models", href: "#" },
      { name: "Agents", href: "#" },
      { name: "API Keys", href: "#" },
      { name: "Playground", href: "#" },
      { name: "Analytics", href: "#" },
      { name: "Docs", href: "#" },
      { name: "Support", href: "#" },
      { name: "Pricing", href: "#" },
    ],
    Connect: [
      { name: "Github", href: "#" },
      { name: "Linkedin", href: "#" },
      { name: "Discord", href: "#" },
      { name: "X", href: "#" },
      { name: "Youtube", href: "#" },
    ],
    Legal: [
      { name: "Privacy Polices", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="bg-black text-white py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Iterate through the categories from image_12f3f4.png */}
        {Object.entries(footerData).map(([category, links]) => (
          <div key={category} className="space-y-6">
            <h3 className="text-xl font-semibold tracking-tight">
              {category}
            </h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-[15px] font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Branding / Newsletter Area (Optional addition for balance) */}
        <div className="col-span-2 md:col-span-1 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tighter">
              KIDJIG<span className="text-blue-500">.</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Enterprise-grade AI orchestration and API management.
            </p>
          </div>
          <div className="pt-8 text-gray-600 text-xs">
            © 2026 Kidjig. All rights reserved.
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient accent matching image_1359b1.png */}
      <div className="max-w-6xl mx-auto mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </footer>
  );
};

export default Footer;