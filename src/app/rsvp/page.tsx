"use client";

import { useState, FormEvent } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface FormData {
  email: string;
  attendance: string;
  numberOfGuests: string;
  guestNames: string[];
  dietary: string;
  message: string;
}

export default function RSVPPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    attendance: "",
    numberOfGuests: "1",
    guestNames: [""],
    dietary: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.attendance) {
      newErrors.attendance = "Por favor selecione a sua presença";
    }

    if (formData.attendance === "yes") {
      formData.guestNames.forEach((name, index) => {
        if (!name.trim()) {
          newErrors[`guestName${index}`] = `Nome do convidado ${index + 1} é obrigatório`;
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzXI7jqqL_Jz6mxwiDJLHomr-yfMV0QitgXQ6QVhj3s7uLnrjsjmQdBOEVVALccOdJT/exec';
      
      // Using text/plain to avoid CORS preflight issues with Google Scripts
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
          type: 'rsvp',
          email: formData.email,
          attendance: formData.attendance,
          numberOfGuests: parseInt(formData.numberOfGuests),
          guestNames: formData.guestNames,
          dietary: formData.dietary,
          message: formData.message
        }),
      });

      console.log("Form submitted:", formData);
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Erro ao enviar o formulário. Por favor tenta novamente.");
    } finally {
      setIsSubmitting(false);
    }

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        email: "",
        attendance: "",
        numberOfGuests: "1",
        guestNames: [""],
        dietary: "",
        message: "",
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const handleNumberOfGuestsChange = (value: string) => {
    const num = parseInt(value);
    const newGuestNames = Array(num).fill("").map((_, i) => formData.guestNames[i] || "");
    setFormData((prev) => ({
      ...prev,
      numberOfGuests: value,
      guestNames: newGuestNames,
    }));
  };

  const handleGuestNameChange = (index: number, value: string) => {
    const newGuestNames = [...formData.guestNames];
    newGuestNames[index] = value;
    setFormData((prev) => ({
      ...prev,
      guestNames: newGuestNames,
    }));
    // Clear error
    if (errors[`guestName${index}`]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[`guestName${index}`];
        return newErrors;
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <section className="py-20 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
              RSVP
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-300 to-pink-300 mx-auto mb-8"></div>
            <p className="text-center text-gray-600 mb-12">
              Por favor responda até 1 de maio de 2026
            </p>

            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg text-center">
                <svg className="w-12 h-12 mx-auto mb-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Obrigado!</h3>
                <p>O teu RSVP foi recebido. Mal podemos esperar para celebrar contigo!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8">
                {/* Email */}
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="joao@exemplo.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Attendance */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Vais estar presente? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="attendance"
                        value="yes"
                        checked={formData.attendance === "yes"}
                        onChange={handleChange}
                        className="mr-2 text-rose-400 focus:ring-rose-300"
                      />
                      <span>Sim, estarei lá!</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="attendance"
                        value="no"
                        checked={formData.attendance === "no"}
                        onChange={handleChange}
                        className="mr-2 text-rose-400 focus:ring-rose-300"
                      />
                      <span>Infelizmente não posso</span>
                    </label>
                  </div>
                  {errors.attendance && (
                    <p className="text-red-500 text-sm mt-1">{errors.attendance}</p>
                  )}
                </div>

                {formData.attendance === "yes" && (
                  <>
                    {/* Number of Guests */}
                    <div className="mb-6">
                      <label htmlFor="numberOfGuests" className="block text-gray-700 font-semibold mb-2">
                        Quantas pessoas? *
                      </label>
                      <select
                        id="numberOfGuests"
                        name="numberOfGuests"
                        value={formData.numberOfGuests}
                        onChange={(e) => handleNumberOfGuestsChange(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300"
                      >
                        <option value="1">1 pessoa</option>
                        <option value="2">2 pessoas</option>
                        <option value="3">3 pessoas</option>
                        <option value="4">4 pessoas</option>
                        <option value="5">5 pessoas</option>
                      </select>
                    </div>

                    {/* Guest Names */}
                    <div className="mb-6">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Nomes dos Convidados *
                      </label>
                      <div className="space-y-3">
                        {formData.guestNames.map((name, index) => (
                          <div key={index}>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => handleGuestNameChange(index, e.target.value)}
                              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 ${
                                errors[`guestName${index}`] ? "border-red-500" : "border-gray-300"
                              }`}
                              placeholder={`Nome do convidado ${index + 1}`}
                            />
                            {errors[`guestName${index}`] && (
                              <p className="text-red-500 text-sm mt-1">{errors[`guestName${index}`]}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Dietary */}
                    <div className="mb-6">
                      <label htmlFor="dietary" className="block text-gray-700 font-semibold mb-2">
                        Restrições Alimentares (Opcional)
                      </label>
                      <input
                        type="text"
                        id="dietary"
                        name="dietary"
                        value={formData.dietary}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300"
                        placeholder="Vegetariano, sem glúten, alergias..."
                      />
                    </div>
                  </>
                )}

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Mensagem (Opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 resize-none"
                    placeholder="Partilha os teus pensamentos ou sugestões de música..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-rose-300 to-pink-300 hover:from-rose-400 hover:to-pink-400 text-gray-800 font-bold py-4 rounded-xl transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] uppercase tracking-wider"
                >
                  {isSubmitting ? "A enviar..." : "Enviar Resposta"}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
