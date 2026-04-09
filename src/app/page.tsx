"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MysticBackground } from "@/components/gateway/MysticBackground";
import { CrypticText } from "@/components/gateway/CrypticText";
import { GatewayButton } from "@/components/gateway/GatewayButton";
import { useQuizStore } from "@/lib/store/quiz-store";
import { TrialStage } from "@/components/trial/TrialStage";
import { Reveal } from "@/components/reveal/Reveal";

export default function Home() {
  const { currentStep, setStep } = useQuizStore();
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleStartTrials = () => {
    setStep('trial1');
  };

  // Rendering logic for different stages
  const renderStep = () => {
    switch (currentStep) {
      case 'trial1':
        return <TrialStage key="trial1" step="trial1" />;
      case 'trial2':
        return <TrialStage key="trial2" step="trial2" />;
      case 'trial3':
        return <TrialStage key="trial3" step="trial3" />;
      case 'reveal':
        return <Reveal key="reveal" />;
      case 'gateway':
      default:
        return (
          <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
            <MysticBackground />

            <AnimatePresence>
              <motion.div
                key="gateway-content"
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
                  text={`警告：これより先、汝の知識が試される。\n覚悟なき者は立ち去れ。`}
                  onComplete={() => setIsTypingComplete(true)}
                />

                {/* CTA Section */}
                {isTypingComplete && (
                  <GatewayButton onClick={handleStartTrials} />
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        );
    }
  };

  return (
    <div className="bg-zinc-950 min-h-screen font-body selection:bg-mystic-gold/30 selection:text-mystic-gold">
      <AnimatePresence mode="wait">
        {renderStep()}
      </AnimatePresence>
    </div>
  );
}
