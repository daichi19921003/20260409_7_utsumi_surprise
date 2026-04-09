"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GatewayButtonProps {
  onClick: () => void;
}

export const GatewayButton = ({ onClick }: GatewayButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="mt-12"
    >
      <Button
        onClick={onClick}
        variant="outline"
        className="mystic-border-glow group relative h-16 overflow-hidden rounded-none border-mystic-gold bg-transparent px-10 text-lg tracking-[0.2em] text-mystic-gold hover:bg-mystic-gold hover:text-background transition-all duration-500"
      >
        <span className="relative z-10 flex items-center gap-3">
          <Shield className="h-5 w-5 transition-transform group-hover:scale-110" />
          試練を開始する
        </span>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 z-0 bg-radial-[at_50%_50%,_white_0%,_transparent_70%] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      </Button>
      
      <p className="mt-4 text-center text-xs tracking-widest text-mystic-gold/40 uppercase">
        Authorization Required
      </p>
    </motion.div>
  );
};
