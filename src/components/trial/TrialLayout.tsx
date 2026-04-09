"use client";

import { motion } from "framer-motion";
import { MysticBackground } from "@/components/gateway/MysticBackground";
import { ReactNode } from "react";

interface TrialLayoutProps {
  children: ReactNode;
  stage: number;
  title: string;
}

export const TrialLayout = ({ children, stage, title }: TrialLayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950">
      <MysticBackground />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="z-10 w-full max-w-2xl px-6"
      >
        <div className="mb-12 text-center">
          <motion.span
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs tracking-[0.4em] text-mystic-gold/60 uppercase"
          >
            Trial {stage} of 3
          </motion.span>
          <motion.h2
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-2 text-3xl tracking-widest text-mystic-gold sm:text-4xl"
          >
            {title}
          </motion.h2>
          <div className="mt-4 h-px w-24 bg-mystic-gold/20 mx-auto" />
        </div>

        {children}
      </motion.div>
    </div>
  );
};
