"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import RSVPPopup from "./RSVPPopup";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRSVPPopup, setShowRSVPPopup] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navigateToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (pathname === "/") {
      // Already on homepage, just scroll to section
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage first, then scroll to section
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors text-sm font-medium">
              Home
            </Link>
            <button onClick={() => navigateToSection('dress-code')} className="text-gray-600 hover:text-blue-500 transition-colors text-sm font-medium">
              Dress code
            </button>
            <button onClick={() => navigateToSection('presente')} className="text-gray-600 hover:text-rose-400 transition-colors text-sm font-medium">
              Presente
            </button>
            <button onClick={() => navigateToSection('local')} className="text-gray-600 hover:text-rose-400 transition-colors text-sm font-medium">
              O Local
            </button>
            <button onClick={() => navigateToSection('faq')} className="text-gray-600 hover:text-blue-500 transition-colors text-sm font-medium">
              FAQ
            </button>
          </div>

          {/* Right RSVP Button */}
          <div className="hidden md:block ml-auto">
            <button
              onClick={() => setShowRSVPPopup(true)}
              className="px-8 py-2.5 bg-gradient-to-r from-pink-200 to-rose-300 text-gray-700 hover:from-pink-300 hover:to-rose-400 transition-all text-sm font-bold rounded-xl shadow-md hover:shadow-lg uppercase tracking-wider"
            >
              RSVP
            </button>
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
          <button
            onClick={() => setShowRSVPPopup(true)}
            className="md:hidden px-4 py-2 bg-gradient-to-r from-pink-200 to-rose-300 text-gray-700 hover:from-pink-300 hover:to-rose-400 transition-all text-xs font-bold rounded-xl shadow-md uppercase tracking-wider"
          >
            RSVP
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-white/95 backdrop-blur-md rounded-lg p-4">
            <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <button onClick={() => navigateToSection('dress-code')} className="text-gray-600 hover:text-blue-500 transition-colors font-medium text-left">
              Dress code
            </button>
            <button onClick={() => navigateToSection('presente')} className="text-gray-600 hover:text-rose-400 transition-colors font-medium text-left">
              Presente
            </button>
            <button onClick={() => navigateToSection('local')} className="text-gray-600 hover:text-rose-400 transition-colors font-medium text-left">
              O Local
            </button>
            <button onClick={() => navigateToSection('faq')} className="text-gray-600 hover:text-blue-500 transition-colors font-medium text-left">
              FAQ
            </button>
          </div>
        )}
      </div>
      
      {/* RSVP Popup */}
      {showRSVPPopup && (
        <RSVPPopup onClose={() => setShowRSVPPopup(false)} />
      )}
    </nav>
  );
}
