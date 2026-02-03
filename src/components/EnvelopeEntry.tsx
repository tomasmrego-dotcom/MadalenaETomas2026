"use client";

import { useState } from "react";

interface EnvelopeEntryProps {
  onOpen: () => void;
}

export default function EnvelopeEntry({ onOpen }: EnvelopeEntryProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);

  const handleClick = () => {
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
        <div className="absolute top-20 left-20 w-32 h-32 bg-rose-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
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
            <div className="relative w-[90vw] h-[60vh] md:w-[1100px] md:h-[733px] lg:w-[1400px] lg:h-[933px]">
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

          {/* Instruction text - simple fixed position you can adjust */}
          <div
            className={`fixed left-1/2 -translate-x-1/2 transition-opacity duration-500 whitespace-nowrap text-rose-500 font-light text-[18px] md:text-[20px] lg:text-[22px] ${
              isOpening ? "opacity-0" : "opacity-100"
            }`}
            style={{
              top: "60vh",
            }}
          >
            <style jsx>{`
              @media (min-width: 768px) {
                div {
                  top: 600px !important;
                }
              }
              @media (min-width: 1024px) {
                div {
                  top: 820px !important;
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
