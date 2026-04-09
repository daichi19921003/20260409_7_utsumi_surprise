"use client";

import { useState } from "react";
import { TrialLayout } from "./TrialLayout";
import { useQuizStore, QuizStep } from "@/lib/store/quiz-store";
import { QUIZ_CONTENT } from "@/lib/constants/quiz-data";
import { motion, AnimatePresence } from "framer-motion";

interface TrialStageProps {
  step: 'trial1' | 'trial2' | 'trial3';
}

export const TrialStage = ({ step }: TrialStageProps) => {
  const [error, setError] = useState(false);
  const submitAnswer = useQuizStore((state) => state.submitAnswer);
  const content = QUIZ_CONTENT[step];
  const stageNumber = step === 'trial1' ? 1 : step === 'trial2' ? 2 : 3;

  const handleSelect = (option: string) => {
    const success = submitAnswer(step, option);
    if (!success) {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <TrialLayout stage={stageNumber} title={content.title}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-col items-center"
      >
        <p className="mb-12 text-center text-lg leading-relaxed text-zinc-400">
          {content.question}
        </p>

        <div className="w-full space-y-4">
          <AnimatePresence mode="wait">
            {content.options.map((option, index) => (
              <motion.button
                key={option}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 158, 11, 0.05)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelect(option)}
                className={`w-full py-5 px-6 text-lg tracking-[0.4em] text-mystic-gold uppercase border transition-all duration-300 relative overflow-hidden group ${
                  error ? "border-red-900/50" : "border-mystic-gold/20 hover:border-mystic-gold/60"
                }`}
              >
                <span className="relative z-10">{option}</span>
                <div className="absolute inset-0 bg-mystic-gold/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 text-sm text-red-500 uppercase tracking-[0.5em]"
            >
              資格なし
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </TrialLayout>
  );
};
