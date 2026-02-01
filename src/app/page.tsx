"use client";

import { useState, useEffect } from "react";
import EnvelopeEntry from "@/components/EnvelopeEntry";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import WeddingDetails from "@/components/WeddingDetails";
import RSVPForm from "@/components/RSVPForm";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if user has seen the envelope before
    const seen = localStorage.getItem("hasSeenEnvelope");
    if (seen === "true") {
      setShowContent(true);
    }
    setIsChecking(false);
  }, []);

  const handleEnvelopeOpen = () => {
    // Mark that user has seen the envelope
    localStorage.setItem("hasSeenEnvelope", "true");
    setShowContent(true);
  };

  // Don't render anything until we've checked localStorage
  if (isChecking) {
    return null;
  }

  if (!showContent) {
    return <EnvelopeEntry onOpen={handleEnvelopeOpen} />;
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen animate-fade-in">
        <Hero />
        <Countdown />
        <RSVPForm />
      </main>
    </>
  );
}
