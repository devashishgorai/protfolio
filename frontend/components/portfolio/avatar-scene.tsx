"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Sparkles } from "lucide-react";

export function AvatarScene() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[560px] perspective-[1600px]"
    >
      <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_50%_35%,rgba(196,181,253,0.38),rgba(109,40,217,0.14)_35%,transparent_68%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[36px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-4 shadow-[0_40px_120px_rgba(20,10,40,0.65)] backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(168,85,247,0.22),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_50%)]" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#190b2b_0%,#12061f_40%,#090014_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(168,85,247,0.42),rgba(79,70,229,0.16),transparent_64%)]" />

          <div className="absolute left-1/2 top-12 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_32%_32%,#f0d6c8,#d8a98e_42%,#ad6d59_70%,rgba(0,0,0,0)_73%)] shadow-[0_0_90px_rgba(168,85,247,0.25)]">
            <div className="absolute left-10 top-12 h-12 w-12 rounded-full bg-[#2a1636] shadow-[0_0_0_10px_rgba(255,255,255,0.04)]">
              <div className="absolute left-3 top-5 h-3 w-3 rounded-full bg-white" />
            </div>
            <div className="absolute right-10 top-12 h-12 w-12 rounded-full bg-[#2a1636] shadow-[0_0_0_10px_rgba(255,255,255,0.04)]">
              <div className="absolute left-3 top-5 h-3 w-3 rounded-full bg-white" />
            </div>
            <div className="absolute left-1/2 top-[54%] h-3 w-16 -translate-x-1/2 rounded-full bg-[#7c3aed]/70" />
            <div className="absolute left-1/2 top-[62%] h-6 w-16 -translate-x-1/2 rounded-b-[999px] border-b-[6px] border-[#7c3aed]/60" />
            <div className="absolute inset-x-8 top-7 h-14 rounded-full bg-[linear-gradient(180deg,rgba(12,8,24,0.96),rgba(42,20,65,0.4))]" />
            <div className="absolute left-1/2 top-0 h-10 w-28 -translate-x-1/2 rounded-b-[20px] bg-[#0f0b16] shadow-[0_12px_30px_rgba(0,0,0,0.5)]" />
          </div>

          <div className="absolute left-1/2 top-[44%] h-56 w-72 -translate-x-1/2 rounded-[100px_100px_72px_72px] bg-[linear-gradient(180deg,#6b21a8_0%,#31104f_52%,#210a37_100%)] shadow-[0_30px_80px_rgba(10,3,20,0.55)]">
            <div className="absolute inset-x-8 top-6 h-20 rounded-[80px] bg-[linear-gradient(180deg,#9d4edd,rgba(255,255,255,0.08))] blur-[1px]" />
            <div className="absolute left-1/2 top-28 h-8 w-40 -translate-x-1/2 rounded-full bg-[#1a0f28] opacity-75" />
            <div className="absolute left-1/2 top-32 h-20 w-56 -translate-x-1/2 rounded-[50px] bg-[linear-gradient(180deg,#3a174f,#1c0e2d)]" />
            <div className="absolute left-1/2 top-36 h-24 w-72 -translate-x-1/2 rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
            <div className="absolute left-6 top-34 h-16 w-18 rounded-[28px] bg-[linear-gradient(180deg,#b25cff,#5b21b6)] rotate-[-18deg]" />
            <div className="absolute right-6 top-34 h-16 w-18 rounded-[28px] bg-[linear-gradient(180deg,#b25cff,#5b21b6)] rotate-[18deg]" />
          </div>

          <div className="absolute inset-x-10 bottom-8 rounded-[32px] border border-white/15 bg-[linear-gradient(180deg,rgba(10,7,18,0.98),rgba(31,14,50,0.92))] p-3 shadow-[0_26px_60px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/90" />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-white/65">
                <Sparkles className="h-3.5 w-3.5 text-violet-300" />
                Devashish
              </span>
            </div>

            <div className="mt-3 grid grid-cols-[1.1fr_0.9fr] gap-3">
              <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(167,139,250,0.3),rgba(15,11,27,0.96))] p-3">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/60">MacBook workspace</p>
                <div className="mt-3 space-y-2">
                  <div className="h-2.5 w-5/6 rounded-full bg-white/18" />
                  <div className="h-2.5 w-4/6 rounded-full bg-white/12" />
                  <div className="h-2.5 w-3/6 rounded-full bg-white/10" />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(160deg,rgba(59,130,246,0.22),rgba(147,51,234,0.28),rgba(10,7,18,0.94))] p-3">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.25),transparent_40%)]" />
                <div className="relative flex h-full flex-col justify-between">
                  <MonitorSmartphone className="h-7 w-7 text-white/80" />
                  <p className="text-sm font-medium text-white/88">Designing with focus, motion, and taste.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
