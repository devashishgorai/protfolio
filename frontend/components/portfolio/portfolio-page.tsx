"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { navigation } from "@/components/portfolio/portfolio-data";
import { MagneticButton } from "@/components/portfolio/portfolio-ui";

const BackgroundEffects = dynamic(
  () => import("@/components/portfolio/background-effects").then((mod) => mod.BackgroundEffects),
  { ssr: false },
);

const BelowFold = dynamic(() => import("@/components/portfolio/below-fold").then((mod) => mod.BelowFold), {
  loading: () => (
    <div className="premium-shell pb-24">
      <div className="space-y-8 py-24">
        <div className="h-10 w-48 rounded-full bg-white/8" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-64 rounded-[28px] border border-white/10 bg-white/5" />
          ))}
        </div>
      </div>
    </div>
  ),
});

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function HeroAvatar() {
  const reducedMotion = useReducedMotion();
  const avatarRef = useRef<HTMLDivElement>(null);
  const tiltTargetRef = useRef({
    rotateX: 0,
    rotateY: 0,
    translateX: 0,
    translateY: 0,
  });
  const currentRef = useRef({
    rotateX: 0,
    rotateY: 0,
    translateX: 0,
    translateY: 0,
    frameId: 0,
  });

  useEffect(() => {
    if (reducedMotion) {
      return undefined;
    }

    const element = avatarRef.current;
    if (!element) {
      return undefined;
    }

    const handleMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const offsetX = event.clientX - (rect.left + rect.width / 2);
      const offsetY = event.clientY - (rect.top + rect.height / 2);

      tiltTargetRef.current = {
        rotateX: Math.max(-10, Math.min(10, (-offsetY / rect.height) * 18)),
        rotateY: Math.max(-12, Math.min(12, (offsetX / rect.width) * 16)),
        translateX: Math.max(-10, Math.min(10, (offsetX / rect.width) * 14)),
        translateY: Math.max(-8, Math.min(8, (offsetY / rect.height) * 10)),
      };
    };

    const handleLeave = () => {
      tiltTargetRef.current = {
        rotateX: 0,
        rotateY: 0,
        translateX: 0,
        translateY: 0,
      };
    };

    const animationFrameRef = currentRef.current;
    const tick = () => {
      const current = currentRef.current;
      const target = tiltTargetRef.current;
      const ease = 0.08;

      current.rotateX += (target.rotateX - current.rotateX) * ease;
      current.rotateY += (target.rotateY - current.rotateY) * ease;
      current.translateX += (target.translateX - current.translateX) * ease;
      current.translateY += (target.translateY - current.translateY) * ease;

      element.style.transform = `translate3d(${current.translateX}px, ${current.translateY}px, 0) perspective(1200px) rotateX(${current.rotateX}deg) rotateY(${current.rotateY}deg)`;
      animationFrameRef.frameId = window.requestAnimationFrame(tick);
    };

    element.addEventListener("pointermove", handleMove, { passive: true });
    element.addEventListener("pointerleave", handleLeave);
    animationFrameRef.frameId = window.requestAnimationFrame(tick);

    return () => {
      element.removeEventListener("pointermove", handleMove);
      element.removeEventListener("pointerleave", handleLeave);
      window.cancelAnimationFrame(animationFrameRef.frameId);
    };
  }, [reducedMotion]);

  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:max-w-[620px]">
      <div
        ref={avatarRef}
        className="relative origin-center transition-transform duration-150 ease-out will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(196,181,253,0.95),rgba(168,85,247,0.5),transparent_72%)] blur-3xl" />
        <div className="absolute inset-[-6%] rounded-[32px] bg-[radial-gradient(circle_at_50%_42%,rgba(168,85,247,0.48),rgba(168,85,247,0.18),transparent_68%)] blur-3xl" />
        <div className="absolute inset-[18%] rounded-full bg-violet-500/20 blur-[90px]" />
        <Image
          src="/images/image.png"
          alt="Stylized 3D avatar of Devashish sitting behind a glowing MacBook"
          width={1200}
          height={1400}
          priority
          sizes="(min-width: 1280px) 560px, (min-width: 1024px) 500px, 92vw"
          className="relative z-10 h-auto w-full drop-shadow-[0_0_50px_rgba(168,85,247,0.2)]"
        />
      </div>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#090014]/78 py-2 backdrop-blur-2xl"
          : "border-b border-white/10 bg-[#090014]/28 py-5 backdrop-blur-xl"
      }`}
    >
      <div className="w-full px-5 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-end">
          <nav
            className={`hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl md:flex ${
              scrolled ? "scale-[0.97]" : "scale-100"
            } transition-transform duration-300`}
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/82 backdrop-blur-xl md:hidden ${
              scrolled ? "scale-[0.95]" : "scale-100"
            } transition-transform duration-300`}
          >
            <Sparkles className="h-4 w-4 text-violet-300" />
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export function PortfolioPage() {
  return (
    <div className="relative overflow-hidden">
      <BackgroundEffects />
      <Navbar />

      <main className="relative z-10">
        <section id="home" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
          <div className="premium-shell">
            <div className="relative grid items-start gap-10 lg:grid-cols-[minmax(320px,0.9fr)_1.1fr] lg:gap-14 xl:grid-cols-[minmax(380px,0.92fr)_1.08fr]">
              <motion.div
                className="relative mx-auto w-full pt-6 lg:max-w-[620px] lg:pt-10"
                initial="hidden"
                animate="visible"
                variants={heroVariants}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <HeroAvatar />
              </motion.div>

              <motion.div
                className="relative space-y-10 pt-0 lg:pt-12"
                initial="hidden"
                animate="visible"
                variants={heroVariants}
                transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="space-y-5">
                  <div className="relative w-fit lg:pl-8">
                    <p className="text-[15px] font-medium tracking-[0.01em] text-white/95 sm:text-[18px]">
                      Hello! I Am Devashish!
                    </p>
                    <svg
                      className="absolute -left-[300px] -top-2 hidden h-[210px] w-[360px] text-white/60 lg:block"
                      viewBox="0 0 360 210"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M320 34C286 34 244 46 202 72C168 93 134 115 86 138"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                      <path d="M86 138L104 133" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <path d="M86 138L97 152" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="text-[15px] font-medium tracking-[0.01em] text-white/90 sm:text-[18px] lg:pl-8">
                    A Engineer who
                  </p>
                  <h1 className="max-w-3xl font-[family-name:var(--font-body)] text-[clamp(3.2rem,6vw,5.25rem)] leading-[0.92] font-medium tracking-[-0.065em] text-white lg:pl-8">
                    Loves to build
                    <span className="block">
                      <span className="relative inline-block text-[#7c3aed]">
                        software
                        <span className="absolute -inset-x-6 -inset-y-4 rounded-[999px] border border-white/75 rotate-[-4deg]" />
                      </span>
                      <span className="text-white">...</span>
                    </span>
                  </h1>
                  <p className="max-w-xl text-sm leading-6 text-white/74 sm:text-base lg:pl-8">
                    Because if it doesn&apos;t solve a problem, what else can?
                  </p>
                </div>

                <div className="max-w-2xl space-y-5 pt-8 lg:pl-8">
                  <div className="flex flex-wrap gap-4">
                    <MagneticButton href="https://www.linkedin.com/in/devashishofficial/" icon={FaLinkedinIn}>
                      LinkedIn
                    </MagneticButton>
                    <MagneticButton href="/resume" variant="secondary" icon={ChevronDown} download>
                      Download Resume
                    </MagneticButton>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <BelowFold />
      </main>
    </div>
  );
}
