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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      const progress = Math.min(window.scrollY / 220, 1);
      setScrollProgress(progress);
    };

    const handleScroll = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target instanceof HTMLElement) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-38% 0px -48% 0px",
        threshold: [0.15, 0.25, 0.4, 0.6],
      },
    );

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full px-4 py-4 sm:px-6 lg:px-8">
      <div
        className="mx-auto flex max-w-[1800px] items-center justify-between gap-4 rounded-[28px] border border-white/10 bg-[#120722]/92 px-4 py-4 shadow-[0_18px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-300 sm:px-6 lg:px-8"
        style={{
          transform: `scale(${1 - scrollProgress * 0.04})`,
          transformOrigin: "top center",
          borderRadius: `${28 - scrollProgress * 4}px`,
          paddingTop: `${16 - scrollProgress * 5}px`,
          paddingBottom: `${16 - scrollProgress * 5}px`,
        }}
      >
        <a
          href="#home"
          className="inline-flex items-center gap-3 rounded-full px-2 py-1 text-white/90 transition-colors hover:text-white"
        >
          <span className="flex h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.95)]" />
          <span className="font-[family-name:var(--font-heading)] text-lg font-semibold tracking-[-0.04em] uppercase">
            Devashish_Gorai
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navigation.map((item) => {
            const sectionId = item.href.replace("#", "");
            const active = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-5 py-2 text-[13px] font-semibold tracking-[0.3em] uppercase transition-all duration-300 ${
                  active
                    ? "border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.24)]"
                    : "text-white/55 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

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
