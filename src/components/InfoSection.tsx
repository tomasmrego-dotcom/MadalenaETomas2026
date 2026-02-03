"use client";

import { useState } from "react";
import PostalCardForm from "./PostalCardForm";

export default function InfoSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const [showMessageModal, setShowMessageModal] = useState(false);
  
  return (
    <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Dress Code Section - Image Right, Text Left */}
        <div id="dress-code" className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text on Left */}
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800">
              Dress Code
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Recomendamos um traje formal chique. Para as senhoras, vestidos longos ou de cocktail em tons claros ou inspirados na natureza são perfeitos (por favor evitem branco ou tons muito semelhantes ou padrões florais). O casamento será num ambiente florestal junto a um lago, por isso aconselhamos a não usar saltos muito finos, pois o piso é natural. Ténis/sapatilhas devem ser evitados para manter o estilo formal chique.
            </p>
          </div>
          
          {/* Image on Right */}
          <div className="order-1 md:order-2">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src={`${basePath}/dress_code.jpeg`}
                alt="Dress Code"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Present/Registry Section - Image Left, Text Right */}
        <div id="presente" className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image on Left */}
          <div className="order-1">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src={`${basePath}/kenya.jpg`}
                alt="Presente"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Text and Payment Info on Right */}
          <div className="order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800">
              Presente
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              A vossa presença é o melhor presente de todos. Mas se nos quiserem ajudar com a lua de mel (segredo: fácil de adivinhar onde pela fotografia) ficaríamos muito agradecidos:
            </p>
            
            {/* Payment Options */}
            <div className="space-y-4 bg-white/80 rounded-xl p-6 shadow-lg">
              {/* MBWay */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-lg border-2 border-blue-100 p-2">
                  <img
                    src={`${basePath}/Icons/Logo_MBWay.webp`}
                    alt="MBWay"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">MBWay</p>
                  <p className="text-gray-800 font-semibold">+351 924 197 355</p>
                </div>
              </div>
              
              {/* Banking */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-green-50 rounded-lg border-2 border-green-100 p-2">
                  <img
                    src={`${basePath}/Icons/bank.png`}
                    alt="Bank Transfer"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">IBAN</p>
                  <p className="text-gray-800 font-mono text-sm">PT50 0018 0003 6128 3636 0203 0</p>
                </div>
              </div>
              
              {/* Revolut */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-purple-50 rounded-lg border-2 border-purple-100 p-2">
                  <img
                    src={`${basePath}/Icons/Revolut.webp`}
                    alt="Revolut"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Revolut</p>
                  <a 
                    href="https://revolut.me/tomsq2n3o" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 font-semibold underline"
                  >
                    revolut.me/tomsq2n3o
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setShowMessageModal(true)}
              className="w-full md:w-auto px-10 py-3.5 bg-gradient-to-r from-rose-300 to-pink-300 text-gray-800 hover:from-rose-400 hover:to-pink-400 transition-all text-sm font-bold uppercase tracking-widest rounded-xl shadow-md hover:shadow-lg"
            >
              Quero deixar uma mensagem
            </button>
          </div>
        </div>
      </div>

      {/* Postcard Modal */}
      {showMessageModal && (
        <PostalCardForm onClose={() => setShowMessageModal(false)} />
      )}
    </section>
  );
}
