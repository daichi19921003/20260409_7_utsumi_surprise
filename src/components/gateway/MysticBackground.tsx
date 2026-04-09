"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const MysticBackground = () => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; driftX: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      driftX: Math.random() * 50 - 25,
    }));
    
    // Use requestAnimationFrame or a small timeout to avoid the synchronous setState warning in some lint rules
    const timeout = setTimeout(() => {
      setParticles(newParticles);
    }, 0);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      {/* Deep gradient overlay */}
      <div className="absolute inset-0 bg-radial-[at_50%_50%,_transparent_0%,_var(--background)_80%]" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-mystic-red/5 to-transparent" />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-mystic-gold/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, p.driftX, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Smoke-like noise effect (using CSS radial gradients) */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        <div className="absolute inset-0 animate-pulse bg-radial-[at_30%_30%,_oklch(1_0_0_/_0.05)_0%,_transparent_50%]" />
        <div className="absolute inset-0 animate-pulse delay-700 bg-radial-[at_70%_60%,_oklch(1_0_0_/_0.05)_0%,_transparent_50%]" />
      </div>
    </div>
  );
};
