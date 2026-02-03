"use client";

import { useState } from 'react';
import RSVPPopup from './RSVPPopup';

export default function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const [showRSVPPopup, setShowRSVPPopup] = useState(false);
  
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden mt-16 md:-mt-0">
      {/* Mobile Hero Image */}
      <img
        src={`${basePath}/hero-mobile.jpeg`}
        alt="Wedding Hero"
        className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
      />
      {/* Desktop Hero Image */}
      <img
        src={`${basePath}/hero.jpeg`}
        alt="Wedding Hero"
        className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]"></div>
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4 pt-16">
        <h1 className="text-6xl md:text-9xl mb-6 text-center text-white" style={{ 
          fontFamily: "'Great Vibes', cursive",
          textShadow: '0 0 20px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.2), 0 4px 30px rgba(0,0,0,0.7)',
          fontWeight: '400',
          letterSpacing: '0.05em'
        }}>
          Madalena & Tomás
        </h1>
        <p className="text-lg md:text-xl font-normal mb-10">
          10 de Outubro de 2026
        </p>
        <button
          onClick={() => setShowRSVPPopup(true)}
          className="group relative px-16 py-5 overflow-hidden rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-rose-300 via-pink-300 to-rose-300"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
          <span className="relative text-gray-800 font-bold tracking-[0.3em] text-xl md:text-2xl uppercase">
            RSVP
          </span>
        </button>
      </div>
      
      {/* RSVP Popup */}
      {showRSVPPopup && (
        <RSVPPopup onClose={() => setShowRSVPPopup(false)} />
      )}
    </section>
  );
}
