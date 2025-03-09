
import React, { useState, useEffect } from 'react';

export const HeroAnimatedTypingText: React.FC = () => {
  const phrases = [
    "Smarter healthcare decisions with AI",
    "Early disease detection for better outcomes",
    "Personalized medicine through AI insights",
    "Secure health data with blockchain technology",
    "Quantum-accelerated drug discovery"
  ];
  
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 100; // Faster when deleting
    const pauseTime = 1500; // Time to pause after typing a complete phrase
    
    const handleTyping = () => {
      const currentPhraseText = phrases[currentIndex];
      
      if (!isDeleting && currentPhrase === currentPhraseText) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
      
      if (isDeleting && currentPhrase === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        return;
      }
      
      const newText = isDeleting
        ? currentPhraseText.substring(0, currentPhrase.length - 1)
        : currentPhraseText.substring(0, currentPhrase.length + 1);
      
      setCurrentPhrase(newText);
    };
    
    const typingTimer = setTimeout(handleTyping, isDeleting ? typingSpeed : (currentPhrase === phrases[currentIndex] ? pauseTime : typingSpeed));
    
    return () => clearTimeout(typingTimer);
  }, [currentPhrase, currentIndex, isDeleting, phrases]);
  
  return (
    <div className="h-8 flex items-center justify-center mt-6 mb-12">
      <div className="inline-flex items-center h-full">
        <span className="text-health-primary mr-2">AI for</span>
        <span className="text-health-dark font-medium min-h-[1em] relative">
          {currentPhrase}
          <span className="absolute top-0 right-[-8px] h-full w-[3px] bg-health-secondary animate-blink"></span>
        </span>
      </div>
    </div>
  );
};
