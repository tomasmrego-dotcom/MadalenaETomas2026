"use client";

import { useState } from 'react';
import Link from "next/link";
import RSVPPopup from './RSVPPopup';

export default function Footer() {
  const [showRSVPPopup, setShowRSVPPopup] = useState(false);
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Names & Date */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif mb-2" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Madalena & Tomás
            </h3>
            <p className="text-gray-400 text-sm">10 de Outubro de 2026</p>
            <p className="text-gray-400 text-sm">Quinta dos Espadeiros</p>
            <p className="text-gray-400 text-sm">Almada, Portugal</p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Início
              </Link>
              <Link href="/quinta" className="text-gray-400 hover:text-white transition-colors text-sm">
                A Quinta
              </Link>
              <Link href="/#dress-code" className="text-gray-400 hover:text-white transition-colors text-sm">
                Dress Code
              </Link>
              <Link href="/#presente" className="text-gray-400 hover:text-white transition-colors text-sm">
                Presente
              </Link>
              <Link href="/#faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                FAQ
              </Link>
            </nav>
          </div>

          {/* RSVP */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Confirme a Presença</h4>
            <button
              onClick={() => setShowRSVPPopup(true)}
              className="inline-block px-6 py-2.5 bg-gradient-to-r from-rose-300 to-pink-300 text-gray-800 hover:from-rose-400 hover:to-pink-400 transition-all text-sm font-bold rounded-xl shadow-md uppercase tracking-wider"
            >
              RSVP
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            © 2026 Madalena & Tomás. Todos os direitos reservados.
          </p>
        </div>
      </div>
      
      {/* RSVP Popup */}
      {showRSVPPopup && (
        <RSVPPopup onClose={() => setShowRSVPPopup(false)} />
      )}
    </footer>
  );
}
