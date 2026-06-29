"use client";

import clsx from "clsx";
import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { memo, type ComponentPropsWithoutRef, type ComponentType, type ReactNode, useEffect, useRef, useState } from "react";
import gsap from "gsap";

type IconComponent = ComponentType<{ className?: string }>;

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

function SectionHeadingBase({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={clsx("space-y-4", align === "center" && "mx-auto max-w-3xl text-center")}>
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="premium-title">{title}</h2>
      {description ? <p className="premium-subtitle">{description}</p> : null}
    </div>
  );
}

export const SectionHeading = memo(SectionHeadingBase);

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

function RevealBase({ children, delay = 0, className }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const Reveal = memo(RevealBase);

type MagneticButtonProps = Omit<ComponentPropsWithoutRef<typeof motion.a>, "children" | "ref"> & {
  icon?: IconComponent;
  variant?: "primary" | "secondary";
  children: ReactNode;
};

function MagneticButtonBase({
  children,
  icon: Icon,
  variant = "primary",
  className,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.5 });

  useEffect(() => {
    if (reducedMotion) {
      return undefined;
    }

    const element = ref.current;
    if (!element) {
      return undefined;
    }

    const handleMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const offsetX = event.clientX - (rect.left + rect.width / 2);
      const offsetY = event.clientY - (rect.top + rect.height / 2);
      x.set((offsetX / rect.width) * 16);
      y.set((offsetY / rect.height) * 16);
    };

    const reset = () => {
      x.set(0);
      y.set(0);
    };

    element.addEventListener("pointermove", handleMove);
    element.addEventListener("pointerleave", reset);
    element.addEventListener("pointerup", reset);

    return () => {
      element.removeEventListener("pointermove", handleMove);
      element.removeEventListener("pointerleave", reset);
      element.removeEventListener("pointerup", reset);
    };
  }, [reducedMotion, x, y]);

  return (
    <motion.a
      ref={ref}
      style={reducedMotion ? undefined : { x: springX, y: springY }}
      whileHover={reducedMotion ? undefined : { scale: 1.02 }}
      whileTap={reducedMotion ? undefined : { scale: 0.98 }}
      className={clsx(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors will-change-transform",
        variant === "primary" &&
          "border border-white/10 bg-white text-slate-950 shadow-[0_18px_50px_rgba(255,255,255,0.12)]",
        variant === "secondary" &&
          "border border-white/12 bg-white/6 text-white backdrop-blur-xl hover:bg-white/10",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {Icon ? <Icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /> : null}
    </motion.a>
  );
}

export const MagneticButton = memo(MagneticButtonBase);

type AnimatedNumberProps = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

function AnimatedNumberBase({
  value,
  suffix = "",
  duration = 1.6,
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView || reducedMotion) {
      return undefined;
    }

    const state = { count: 0 };
    const tween = gsap.to(state, {
      count: value,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        setDisplayValue(Math.round(state.count));
      },
    });

    return () => {
      tween.kill();
    };
  }, [duration, isInView, reducedMotion, value]);

  return (
    <span ref={ref} className={className}>
      {reducedMotion ? value : displayValue}
      {suffix}
    </span>
  );
}

export const AnimatedNumber = memo(AnimatedNumberBase);
