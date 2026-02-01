"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date("2026-10-10T17:00:00");
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const getProgress = (value: number, max: number) => {
    const percentage = (value / max) * 100;
    return percentage;
  };

  const CircularProgress = ({ value, max, color, label }: { value: number; max: number; color: string; label: string }) => {
    const percentage = getProgress(value, max);
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <svg className="transform -rotate-90 w-24 h-24 md:w-32 md:h-32">
            <circle
              cx="50%"
              cy="50%"
              r="45"
              stroke="#f0f0f0"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50%"
              cy="50%"
              r="45"
              stroke={color}
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl md:text-4xl font-light text-gray-700">
              {String(value).padStart(2, '0')}
            </span>
          </div>
        </div>
        <span className="mt-3 text-sm md:text-base text-gray-600">{label}</span>
      </div>
    );
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-16">
          Onde e Quando
        </h2>
        
        {/* Date */}
        <div className="text-center mb-12">
          <p className="text-2xl md:text-3xl font-light text-gray-700">
            Sábado, 10 de Outubro de 2026
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-16">
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
            <CircularProgress value={timeLeft.days} max={250} color="#fda4af" label="Days" />
            <CircularProgress value={timeLeft.hours} max={24} color="#f9a8d4" label="Hours" />
            <CircularProgress value={timeLeft.minutes} max={60} color="#d8b4fe" label="Minutes" />
            <CircularProgress value={timeLeft.seconds} max={60} color="#fecaca" label="Seconds" />
          </div>
        </div>

        {/* Location */}
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-2">
            Quinta dos Espadeiros
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            2810-434 Almada
          </p>
          <a 
            href="/local"
            className="inline-block px-8 py-3 bg-gradient-to-r from-rose-300 to-pink-300 text-gray-700 hover:from-rose-400 hover:to-pink-400 transition-all font-semibold rounded-lg shadow-md hover:shadow-lg"
          >
            Como chegar lá
          </a>
        </div>
      </div>
    </section>
  );
}
