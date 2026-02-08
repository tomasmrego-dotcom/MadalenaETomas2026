"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Confirmação de presença",
    answer: "Para nos ajudarem na organização do dia, agradecemos que confirmem a vossa presença até ao dia 1 de junho de 2026, através do preenchimento do formulário RSVP disponível no canto superior direito do site."
  },
  {
    question: "Restrições alimentares",
    answer: "Caso tenham alguma restrição ou preferência alimentar, por favor indiquem-na no formulário de RSVP. Faremos o possível para acomodar todas as necessidades da melhor forma. Estarão disponíveis opções vegetarianas, veganas e de peixe, pensadas para diferentes preferências alimentares."
  },
  {
    question: "Estacionamento",
    answer: "No local existe um amplo estacionamento disponível na entrada da quinta, com capacidade para mais de 100 carros, para os convidados estacionarem confortavelmente."
  },
  {
    question: "Duração do Evento",
    answer: "A festa termina às 4h00 da manhã. Dancem, comam e divirtam-se connosco!"
  }
];

export default function FAQ() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-center bg-cover" style={{ backgroundImage: `url(${basePath}/timeline_background.jpeg)` }}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-white mb-6">
          Perguntas Frequentes
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-pink-300 mx-auto mb-16 rounded-full"></div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-white/20"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white text-lg">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-rose-300 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 py-4 text-gray-300 bg-black/20">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
