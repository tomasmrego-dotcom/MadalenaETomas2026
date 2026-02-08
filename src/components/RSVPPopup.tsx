"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

interface RSVPPopupProps {
  onClose: () => void;
}

export default function RSVPPopup({ onClose }: RSVPPopupProps) {
  const [names, setNames] = useState("");
  const [guestCount, setGuestCount] = useState("1");
  const [attendance, setAttendance] = useState<"yes" | "no" | "">("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [songRequest, setSongRequest] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSending, setIsSending] = useState(false);
  
  const handleSubmit = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!names.trim() || !attendance) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxJX4OZIrEsV2Zs1VmIc2WD7huTf49jzM1zx7pO4DhgRrcfFDJ8_sRHGzpeM1zUUh12/exec';

      fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
          type: 'rsvp',
          names: names,
          guestCount: guestCount,
          attendance: attendance,
          dietaryRestrictions: dietaryRestrictions,
          songRequest: songRequest
        })
      });
      
      setIsSending(true);
      setIsSubmitting(false);
      
      setTimeout(() => {
        setNames('');
        setGuestCount('1');
        setAttendance('');
        setDietaryRestrictions('');
        setSongRequest('');
        setIsSending(false);
        onClose();
      }, 2000);
      
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm overflow-y-auto" 
      onClick={isSending ? undefined : onClose}
    >
      <div className="relative w-full max-w-md sm:max-w-2xl md:max-w-4xl my-8 sm:my-0">
        {/* Close Button */}
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
            className="rounded-lg shadow-2xl relative transition-all duration-1000 hover:shadow-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 30%, #F9A8D4 70%, #FBBF24 100%)'
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[350px] sm:min-h-[450px]">
              {/* Left Side - Blue Section with pink melting */}
              <div className="flex flex-col justify-center items-center p-4 sm:p-8 text-white relative bg-gradient-to-b from-blue-500 via-blue-400 to-pink-300">
                <div className="text-center">
                  <h2 className="text-3xl sm:text-6xl font-bold mb-4 tracking-wide">
                    Please say YES!
                  </h2>
                </div>
              </div>

              {/* Right Side - Strong Pink Section */}
              <div className="p-4 sm:p-8 bg-gradient-to-br from-pink-400 to-rose-500">
                
                {/* Names Field */}
                <div className="mb-3">
                  <label className="block text-xs sm:text-sm font-bold text-white mb-2 tracking-widest">
                    NOME(S) DO(S) CONVIDADO(S)
                  </label>
                  <input
                    type="text"
                    value={names}
                    onChange={(e) => setNames(e.target.value)}
                    className="w-full bg-transparent border-0 border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white text-base sm:text-lg py-1.5"
                    placeholder="Nome completo"
                    required
                  />
                </div>

                {/* Attendance Checkboxes */}
                <div className="mb-4">
                  <label className="block text-xs sm:text-sm font-bold text-white mb-2 tracking-widest">
                    CONFIRMAÇÃO DE PRESENÇA
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="attendance"
                          value="yes"
                          checked={attendance === "yes"}
                          onChange={(e) => setAttendance(e.target.value as "yes")}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 border-2 border-white ${attendance === "yes" ? "bg-white" : "bg-transparent"}`}>
                          {attendance === "yes" && (
                            <svg className="w-3 h-3 text-pink-500 mx-auto mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="ml-3 text-white font-bold tracking-wide text-sm sm:text-lg">Sim, com todo o gosto</span>
                    </label>

                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="attendance"
                          value="no"
                          checked={attendance === "no"}
                          onChange={(e) => setAttendance(e.target.value as "no")}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 border-2 border-white ${attendance === "no" ? "bg-white" : "bg-transparent"}`}>
                          {attendance === "no" && (
                            <svg className="w-3 h-3 text-pink-500 mx-auto mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="ml-3 text-white font-bold tracking-wide text-sm sm:text-lg">Infelizmente não poderei estar presente</span>
                    </label>
                  </div>
                </div>

                {/* Guest Count Field */}
                <div className="mb-4">
                  <label className="block text-xs sm:text-sm font-bold text-white mb-2 tracking-widest">
                    NÚMERO DE CONVIDADOS QUE IRÃO ESTAR PRESENTES
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-transparent border-0 border-b-2 border-white text-white focus:outline-none focus:border-white text-base sm:text-lg py-1.5"
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num.toString()} className="bg-pink-500 text-white">{num}</option>
                    ))}
                  </select>
                </div>

                {/* Dietary Restrictions */}
                <div className="mb-4">
                  <label className="block text-xs sm:text-sm font-bold text-white mb-2 tracking-widest">
                    RESTRIÇÕES OU PREFERÊNCIAS ALIMENTARES
                  </label>
                  <input
                    type="text"
                    value={dietaryRestrictions}
                    onChange={(e) => setDietaryRestrictions(e.target.value)}
                    className="w-full bg-transparent border-0 border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white text-base sm:text-lg py-1.5"
                    placeholder="(opcional)"
                  />
                </div>

                {/* Song Request */}
                <div className="mb-4">
                  <label className="block text-sm font-bold text-white mb-2 tracking-widest">
                    SUGESTÃO DE MÚSICA
                  </label>
                  <input
                    type="text"
                    value={songRequest}
                    onChange={(e) => setSongRequest(e.target.value)}
                    className="w-full bg-transparent border-0 border-b-2 border-white text-white placeholder-white/70 focus:outline-none focus:border-white text-lg py-2"
                    placeholder="Nome da música ou artista"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting || isSending || !names.trim() || !attendance}
            className={`w-full py-3 sm:py-4 text-white font-bold uppercase tracking-widest rounded-lg shadow-lg transition-all flex items-center justify-center gap-3 disabled:cursor-not-allowed text-sm sm:text-base ${
              isSending 
                ? 'bg-green-500 animate-shake text-white shadow-green-500/50 shadow-xl' 
                : 'bg-gradient-to-r from-rose-300 to-blue-500 hover:shadow-xl hover:from-rose-400 hover:to-blue-600 disabled:opacity-50'
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
                Enviar RSVP
              </>
            )}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}