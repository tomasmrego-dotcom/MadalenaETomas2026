"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

interface PostalCardFormProps {
  onClose: () => void;
}

export default function PostalCardForm({ onClose }: PostalCardFormProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSending, setIsSending] = useState(false);
  
  const handleSubmit = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent bubbling to backdrop
    
    if (!name.trim() || !message.trim()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzXI7jqqL_Jz6mxwiDJLHomr-yfMV0QitgXQ6QVhj3s7uLnrjsjmQdBOEVVALccOdJT/exec';

      fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
          type: 'gift',
          name: name,
          message: message
        })
      });
      
      // Start button animation immediately since no-cors returns instantly
      setIsSending(true);
      setIsSubmitting(false);
      
      // Close after showing success state
      setTimeout(() => {
        setName('');
        setMessage('');
        setIsSending(false);
        onClose();
      }, 2000);
      
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  // Render the modal directly to document.body using Portal
  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm overflow-y-auto" 
      onClick={isSending ? undefined : onClose}
    >
      <div className="relative w-full max-w-sm sm:max-w-3xl md:max-w-5xl my-8 sm:my-0">
        {/* Close Button - Above the postcard */}
        <button
          type="button"
          onClick={isSending ? undefined : onClose}
          disabled={isSending}
          className="absolute -top-8 sm:-top-12 right-0 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="space-y-2 sm:space-y-4" onClick={(e) => e.stopPropagation()}>
          <div 
            className="bg-amber-50 rounded-lg shadow-2xl relative transition-all duration-1000 hover:shadow-3xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,.05) 10px,
                rgba(255,255,255,.05) 20px
              )`
            }}
          >
            {/* Airmail Border Effect */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: `repeating-linear-gradient(
                45deg,
                #e53e3e 0px,
                #e53e3e 15px,
                white 15px,
                white 30px,
                #3182ce 30px,
                #3182ce 45px,
                white 45px,
                white 60px
              )`,
              WebkitMask: `
                linear-gradient(white, white) content-box,
                linear-gradient(white, white)
              `,
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              padding: '15px',
              borderRadius: '0.5rem'
            }}></div>

            {/* Stamp - Top Right Corner */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-16 h-16 sm:w-32 sm:h-32 z-10">
              <img
                src={`${basePath}/Icons/stamp.jpg`}
                alt="Stamp"
                className="w-full h-full object-contain drop-shadow-md"
                style={{ transform: 'rotate(8deg)' }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 p-3 sm:p-6">
              {/* Left Side - Image */}
              <div className="relative h-[200px] sm:h-[300px] md:h-[500px] sm:border-r-2 border-blue-300 sm:pr-4 mb-4 sm:mb-0">
                <img
                  src={`${basePath}/kenya2.jpg`}
                  alt="Kenya"
                  className="w-full h-full object-cover rounded border-2 border-gray-300 shadow-md"
                />
              </div>

              {/* Right Side - Message Area */}
              <div className="sm:pl-4 relative">
                {/* From field */}
                <div className="mb-2 sm:mb-4 pt-2 sm:pt-16">
                  <label htmlFor="gift-name" className="block text-sm text-blue-600 mb-1" style={{ fontFamily: 'cursive' }}>
                    from:
                  </label>
                  <input
                    type="text"
                    id="gift-name"
                    name="gift-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="O teu nome"
                    className="w-full px-0 py-1 border-0 border-b-2 border-blue-400 bg-transparent focus:outline-none focus:border-blue-600 text-gray-800"
                    style={{ fontFamily: 'cursive' }}
                    required
                  />
                </div>

                {/* To field */}
                <div className="mb-3 sm:mb-6">
                  <label className="block text-sm text-blue-600 mb-2" style={{ fontFamily: 'cursive' }}>
                    to: Madalena & Tomás
                  </label>
                  <div className="w-full border-b-2 border-blue-400 pb-1"></div>
                </div>

                {/* Message Lines */}
                <textarea
                  id="gift-message"
                  name="gift-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escreve aqui a tua mensagem..."
                  rows={6}
                  className="w-full px-0 py-2 border-0 bg-transparent focus:outline-none text-gray-800 resize-none text-sm sm:text-base"
                  style={{ 
                    fontFamily: 'cursive'
                  }}
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button - Below the postcard */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting || isSending}
            className={`w-full py-2.5 sm:py-3.5 text-white font-bold uppercase tracking-wide sm:tracking-widest rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 sm:gap-3 disabled:cursor-not-allowed text-sm sm:text-base ${
              isSending 
                ? 'bg-green-500 animate-shake text-white shadow-green-500/50 shadow-xl' 
                : 'bg-gradient-to-r from-red-500 to-blue-500 hover:shadow-xl hover:from-red-600 hover:to-blue-600 disabled:opacity-50'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                A enviar...
              </>
            ) : isSending ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Enviado!
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Enviar
              </>
            )}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}