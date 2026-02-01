"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-rose-400 transition-colors text-sm font-medium">
              Início
            </Link>
            <Link href="/local" className="text-gray-600 hover:text-rose-400 transition-colors text-sm font-medium">
              Local
            </Link>
            <Link href="#viagem" className="text-gray-600 hover:text-rose-400 transition-colors text-sm font-medium">
              Viagem
            </Link>
            <Link href="#lista" className="text-gray-600 hover:text-rose-400 transition-colors text-sm font-medium">
              Lista de Casamento
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-rose-400 transition-colors text-sm font-medium">
              FAQ
            </Link>
          </div>

          {/* Right RSVP Button */}
          <div className="hidden md:block ml-auto">
            <Link
              href="/rsvp"
              className="px-8 py-2.5 bg-gradient-to-r from-rose-300 to-pink-300 text-gray-800 hover:from-rose-400 hover:to-pink-400 transition-all text-sm font-bold rounded-xl shadow-md hover:shadow-lg uppercase tracking-wider"
            >
              RSVP
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-800 z-50"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Mobile RSVP Button */}
          <Link
            href="/rsvp"
            className="md:hidden px-4 py-2 bg-gradient-to-r from-rose-300 to-pink-300 text-gray-800 hover:from-rose-400 hover:to-pink-400 transition-all text-xs font-bold rounded-xl shadow-md uppercase tracking-wider"
          >
            RSVP
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-white/95 backdrop-blur-md rounded-lg p-4">
            <Link href="/" className="text-gray-600 hover:text-rose-400 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
              Início
            </Link>
            <Link href="/local" className="text-gray-600 hover:text-rose-400 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
              Local
            </Link>
            <Link href="#viagem" className="text-gray-600 hover:text-rose-400 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
              Viagem
            </Link>
            <Link href="#lista" className="text-gray-600 hover:text-rose-400 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
              Lista de Casamento
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-rose-400 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
