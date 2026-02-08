"use client";

import { useState, useEffect } from "react";

interface EnvelopeEntryProps {
  onOpen: () => void;
}

export default function EnvelopeEntry({ onOpen }: EnvelopeEntryProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const [invitationLoaded, setInvitationLoaded] = useState(false);

  // Preload the invitation image
  useEffect(() => {
    const invitationImg = new Image();
    invitationImg.onload = () => setInvitationLoaded(true);
    invitationImg.src = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/invitation.png`;
  }, []);

  const handleClick = () => {
    // Only start animation if invitation image is preloaded
    if (!invitationLoaded) return;
    
    setIsOpening(true);
    // Show invitation after envelope starts opening
    setTimeout(() => {
      setShowInvitation(true);
    }, 800);
    // Wait 5 seconds after invitation appears before showing main content
    setTimeout(() => {
      onOpen();
    }, 5800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center">
        <div className="relative inline-block">
          {/* Envelope */}
          <div
            onClick={handleClick}
            className={`cursor-pointer hover:scale-105 transition-transform duration-300 ${
              isOpening ? "" : "scale-100 opacity-100"
            }`}
            style={{
              animation: isOpening ? "envelopeOpen 1.2s ease-out forwards" : "none",
            }}
          >
            <div className="relative w-[98vw] h-[70vh] md:w-[900px] md:h-[600px] lg:w-[1100px] lg:h-[733px]">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/envelope.png`}
                alt="Wedding Invitation Envelope"
                className={`w-full h-full object-contain drop-shadow-2xl transition-opacity duration-1000 ${
                  showInvitation ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
          </div>

          {/* Invitation Card - slides up from envelope */}
          {showInvitation && (
            <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
              <div
                className="flex items-center justify-center w-full h-full"
                style={{
                  animation: "slideUp 1s ease-out forwards",
                }}
              >
                <div className="relative w-[85vw] h-[70vh] md:w-[700px] md:h-[933px] lg:w-[900px] lg:h-[1200px]">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/invitation.png`}
                    alt="Wedding Invitation"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Instruction text - positioned below envelope with proper spacing */}
          <div
            className={`fixed left-1/2 -translate-x-1/2 transition-opacity duration-500 whitespace-nowrap text-blue-600 font-light text-[18px] md:text-[20px] lg:text-[22px] ${
              isOpening ? "opacity-0" : "opacity-100"
            }`}
            style={{
              top: "60vh", // Mobile: simple VH positioning
            }}
          >
            <style jsx>{`
              @media (min-width: 768px) {
                div {
                  top: 80vh !important; /* Tablet */
                }
              }
              @media (min-width: 1024px) {
                div {
                  top: 75vh !important; /* Desktop */
                }
              }
              @media (min-width: 1440px) {
                div {
                  top: 70vh !important; /* Large screens */
                }
              }
              .flower-explosion {
                width: var(--base-size);
                height: var(--base-size);
              }
              @media (min-width: 1024px) {
                .flower-explosion {
                  width: calc(var(--base-size) * 2.2);
                  height: calc(var(--base-size) * 2.2);
                }
              }
              @media (min-width: 1440px) {
                .flower-explosion {
                  width: calc(var(--base-size) * 3.2);
                  height: calc(var(--base-size) * 3.2);
                }
              }
              @media (min-width: 1920px) {
                .flower-explosion {
                  width: calc(var(--base-size) * 4.5);
                  height: calc(var(--base-size) * 4.5);
                }
              }
              @keyframes flowerExplosion {
                0% {
                  opacity: 0;
                  visibility: hidden;
                  transform: translate(var(--start-x), var(--start-y)) scale(0.3);
                }
                10% {
                  opacity: 1;
                  visibility: visible;
                  transform: translate(var(--start-x), var(--start-y)) scale(1);
                }
                70% {
                  opacity: 1;
                  visibility: visible;
                  transform: translate(var(--end-x), var(--end-y)) scale(1);
                }
                100% {
                  opacity: 0;
                  visibility: hidden;
                  transform: translate(var(--end-x), var(--end-y)) scale(0.8);
                }
              }
              @keyframes envelopeOpen {
                0% {
                  transform: scale(1);
                }
                30% {
                  transform: scale(1.05) rotateX(5deg);
                }
                60% {
                  transform: scale(1.1) rotateX(-5deg);
                }
                100% {
                  transform: scale(1.05) translateY(-20px);
                  opacity: 0.8;
                }
              }
              @keyframes slideUp {
                0% {
                  transform: translateY(30%);
                  opacity: 0;
                }
                100% {
                  transform: translateY(0);
                  opacity: 1;
                }
              }
              @keyframes fadeIn {
                0% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                }
              }
            `}</style>
            Clica para abrir o teu convite
          </div>
        </div>
      </div>
    </div>
  );
}
