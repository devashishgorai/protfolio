"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

type Particle = {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
};

export function BackgroundEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 14 }, (_, index) => ({
        left: (index * 19 + 13) % 100,
        top: (index * 27 + 17) % 100,
        size: 2 + (index % 4) * 1.1,
        duration: 9 + (index % 5) * 2,
        delay: index * 0.35,
      })),
    [],
  );

  useEffect(() => {
    if (reducedMotion) {
      return undefined;
    }

    const element = cursorRef.current;
    if (!element) {
      return undefined;
    }

    let targetX = window.innerWidth * 0.5;
    let targetY = window.innerHeight * 0.5;
    let currentX = targetX;
    let currentY = targetY;
    let frameId = 0;

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      element.style.opacity = "1";
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      element.style.transform = `translate3d(${currentX - 180}px, ${currentY - 180}px, 0)`;
      frameId = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.cancelAnimationFrame(frameId);
    };
  }, [reducedMotion]);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-[-160px] h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.24),rgba(168,85,247,0.04),transparent_72%)] blur-3xl"
          animate={reducedMotion ? undefined : { y: [0, 18, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-120px] top-[18%] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.2),rgba(79,70,229,0.04),transparent_72%)] blur-3xl"
          animate={reducedMotion ? undefined : { y: [0, -14, 0], x: [0, -8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-120px] left-[12%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.12),rgba(14,165,233,0.02),transparent_72%)] blur-3xl"
          animate={reducedMotion ? undefined : { y: [0, 14, 0], x: [0, 12, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.28),rgba(37,99,235,0.14),transparent_70%)] opacity-95 blur-3xl mix-blend-screen transition-opacity duration-300 md:block"
      />

      <div className="pointer-events-none fixed inset-0 z-0 hidden opacity-55 md:block">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(circle_at_center,black,transparent_84%)]" />
      </div>

      <div className="pointer-events-none fixed inset-0 z-0 hidden md:block">
        {particles.map((particle, index) => (
          <motion.span
            key={`${particle.left}-${particle.top}-${index}`}
            className="absolute rounded-full bg-white/80 shadow-[0_0_22px_rgba(196,181,253,0.65)]"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={reducedMotion ? undefined : { y: [0, -14, 0], opacity: [0.28, 0.82, 0.28] }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-36 bg-[linear-gradient(180deg,rgba(9,0,20,0.84),transparent)]" />
    </>
  );
}
