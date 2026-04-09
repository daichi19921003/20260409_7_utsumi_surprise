"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MysticBackground } from "@/components/gateway/MysticBackground";
import { CrypticText } from "@/components/gateway/CrypticText";
import { GatewayButton } from "@/components/gateway/GatewayButton";

export default function Home() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStartTrials = () => {
    setIsTransitioning(true);
    // Future: Add navigation to the first trial
    console.log("Starting trials...");
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <MysticBackground />

      <AnimatePresence>
        {!isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 2 }}
            className="z-10 flex flex-col items-center"
          >
            {/* Title Section */}
            <motion.header
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="mb-16 text-center"
            >
              <h1 className="font-heading text-4xl tracking-[0.3em] text-mystic-gold sm:text-6xl md:text-7xl">
                THE SILENT ORDER
              </h1>
              <div className="mt-4 h-px w-32 bg-mystic-gold/30 mx-auto" />
              <p className="mt-4 font-light tracking-[0.5em] text-mystic-gold/60 text-xs sm:text-sm">
                ESTABLISHED SINCE THE DAWN
              </p>
            </motion.header>

            {/* Cryptic Message Section */}
            <CrypticText
              text="警告：これより先、汝の知識が試される。覚悟なき者は立ち去れ。"
              onComplete={() => setIsTypingComplete(true)}
            />

            {/* CTA Section */}
            {isTypingComplete && (
              <GatewayButton onClick={handleStartTrials} />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-16 w-16 border-2 border-mystic-gold rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
