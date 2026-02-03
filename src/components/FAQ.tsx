"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Qual é o dress code?",
    answer: "O dress code é formal/gala. Os homens devem usar fato e as mulheres vestido de cocktail ou gala. Traje de cocktail é bem-vindo."
  },
  {
    question: "Posso levar crianças?",
    answer: "Adoramos crianças, mas o nosso casamento será um evento apenas para adultos. Esperamos que compreendam e aproveitem uma noite fora!"
  },
  {
    question: "Há estacionamento disponível?",
    answer: "Sim, a Quinta dos Espadeiros tem estacionamento gratuito disponível para todos os convidados."
  },
  {
    question: "Até quando devo confirmar presença?",
    answer: "Por favor confirmem a vossa presença até 1 de maio de 2026 através do formulário RSVP."
  },
  {
    question: "Posso fazer fotografias durante a cerimónia?",
    answer: "Pedimos que durante a cerimónia guardem os telemóveis e câmaras para que possam estar completamente presentes. Teremos um fotógrafo profissional a capturar todos os momentos especiais que partilharemos convosco depois!"
  },
  {
    question: "Há opções vegetarianas/veganas?",
    answer: "Sim! Por favor indiquem quaisquer restrições alimentares no formulário RSVP e faremos o nosso melhor para acomodar."
  },
  {
    question: "Que horas termina o evento?",
    answer: "A festa vai até às 2:00 da manhã. Dancem, comam e divirtam-se!"
  },
  {
    question: "Há hotéis próximos?",
    answer: "Sim, há várias opções de alojamento na zona de Almada e Cacilhas. Podem também considerar hotéis em Lisboa, que fica a cerca de 15-20 minutos."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-b from-pink-50/50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-6">
          Perguntas Frequentes
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-rose-300 to-pink-300 mx-auto mb-16 rounded-full"></div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-rose-50/50 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-lg">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-rose-400 transition-transform duration-300 flex-shrink-0 ${
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
                <div className="px-6 py-4 text-gray-600 bg-rose-50/30">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Ainda tens dúvidas?
          </p>
          <a
            href="mailto:madalenatomascasamento@gmail.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-rose-300 to-pink-300 text-gray-800 hover:from-rose-400 hover:to-pink-400 transition-all font-semibold rounded-lg shadow-md hover:shadow-lg"
          >
            Contacta-nos
          </a>
        </div>
      </div>
    </section>
  );
}
