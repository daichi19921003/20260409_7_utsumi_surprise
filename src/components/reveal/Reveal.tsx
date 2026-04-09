"use client";

import { motion } from "framer-motion";
import { MysticBackground } from "@/components/gateway/MysticBackground";
import { decodeBase64 } from "@/lib/utils/crypto";
import { REVEAL_MESSAGE, REWARD_URL_ENCODED } from "@/lib/constants/quiz-data";
import { Sparkles, ExternalLink, Calendar } from "lucide-react";

export const Reveal = () => {
  const rewardUrl = decodeBase64(REWARD_URL_ENCODED);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950">
      <MysticBackground />

      {/* Cinematic Flash Effect */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="fixed inset-0 z-50 bg-white pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="z-10 flex flex-col items-center max-w-3xl px-8 text-center"
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="mb-8 p-4 rounded-full border border-mystic-gold/30 bg-mystic-gold/5"
        >
          <Sparkles className="w-12 h-12 text-mystic-gold" />
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-2xl tracking-[0.2em] text-mystic-gold/60 uppercase mb-6 sm:text-3xl"
        >
          啓示は下された
        </motion.h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="relative mb-16 p-8 rounded-lg border border-mystic-gold/20 bg-zinc-900/50 backdrop-blur-xl"
        >
          <p className="text-xl sm:text-2xl font-light leading-relaxed text-zinc-100 tracking-wider whitespace-pre-line">
            {REVEAL_MESSAGE}
          </p>
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-mystic-gold/40" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-mystic-gold/40" />
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href={rewardUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(245, 158, 11, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 px-10 py-5 bg-mystic-gold text-zinc-950 font-bold text-lg tracking-[0.3em] rounded-sm transition-all group"
          >
            <ExternalLink className="w-6 h-6" />
            リモート飲み会に参加する
          </motion.a>

          <motion.a
            href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("リモート飲み会")}&dates=20260410T130000Z%2F20260410T140000Z&details=${encodeURIComponent("試練を乗り越えた者のみが招待される秘密の宴。\n会場: " + rewardUrl)}&location=${encodeURIComponent(rewardUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.8 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(245, 158, 11, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 px-8 py-5 border border-mystic-gold/40 text-mystic-gold font-medium text-lg tracking-[0.2em] rounded-sm transition-all"
          >
            <Calendar className="w-6 h-6" />
            予定をカレンダーに追加
          </motion.a>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="mt-12 text-xs tracking-[0.5em] text-mystic-gold/30 uppercase"
        >
          Membership Verified • The Silent Order
        </motion.p>
      </motion.div>
    </div>
  );
};
