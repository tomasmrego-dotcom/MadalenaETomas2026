"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';

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
    const radius = 35; // Radius for mobile, 45 for desktop
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-20 h-20 md:w-32 md:h-32">
          <svg className="transform -rotate-90 w-20 h-20 md:w-32 md:h-32" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r="35"
              stroke="#f0f0f0"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="40"
              cy="40"
              r="35"
              stroke={color}
              strokeWidth="6"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl md:text-4xl font-light text-gray-700">
              {String(value).padStart(2, '0')}
            </span>
          </div>
        </div>
        <span className="mt-2 text-xs md:text-base text-gray-600">{label}</span>
      </div>
    );
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section className="py-12 md:py-20 px-4 bg-white relative">
      <div className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url(${basePath}/watermark.png)` }}></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif text-center text-gray-800 mb-8 md:mb-16">
          Local e Data
        </h2>
        
        {/* Date */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xl md:text-3xl font-light text-gray-700">
            Sábado, 10 de Outubro de 2026
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-8 md:mb-16">
          <div className="flex justify-center items-center gap-2 md:gap-8">
            <CircularProgress value={timeLeft.days} max={250} color="#fbb6ce" label="Days" />
            <CircularProgress value={timeLeft.hours} max={24} color="#60a5fa" label="Hours" />
            <CircularProgress value={timeLeft.minutes} max={60} color="#f9a8d4" label="Minutes" />
            <CircularProgress value={timeLeft.seconds} max={60} color="#bfdbfe" label="Seconds" />
          </div>
        </div>

        {/* Location */}
        <div className="text-center">
          <p className="text-xl md:text-3xl font-medium text-gray-800 mb-2">
            Quinta dos Espadeiros
          </p>
          <p className="text-base md:text-xl text-gray-600 mb-6">
            2810-434 Almada
          </p>
          <Link 
            href="/quinta"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-300 to-blue-400 text-gray-700 hover:from-blue-400 hover:to-blue-500 transition-all font-semibold rounded-lg shadow-md hover:shadow-lg"
          >
            Como chegar lá
          </Link>
        </div>
      </div>
    </section>
  );
}
