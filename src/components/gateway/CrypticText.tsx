"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CrypticTextProps {
  text: string;
  onComplete?: () => void;
}

export const CrypticText = ({ text, onComplete }: CrypticTextProps) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentText = "";
    let index = 0;

    const type = () => {
      if (index < text.length) {
        currentText += text[index];
        setDisplayText(currentText);
        index++;
        const delay = Math.random() * 50 + 50; // Variable typing speed
        setTimeout(type, delay);
      } else {
        if (onComplete) onComplete();
      }
    };

    const startTimeout = setTimeout(type, 1000); // Initial delay
    return () => clearTimeout(startTimeout);
  }, [text, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 px-6 text-center">
      <motion.p
        className="mystic-glow max-w-2xl text-lg font-light tracking-widest text-mystic-gold sm:text-2xl whitespace-pre-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {displayText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-1 inline-block h-6 w-1 bg-mystic-gold sm:h-8"
        />
      </motion.p>
    </div>
  );
};
