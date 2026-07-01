"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { ReactNode } from "react";
import {
  aboutTimeline,
  achievements,
  educationHighlights,
  journeyCards,
  projects,
  skillGroups,
  socialLinks,
} from "@/components/portfolio/portfolio-data";
import { AnimatedNumber, MagneticButton, Reveal, SectionHeading } from "@/components/portfolio/portfolio-ui";

function SectionFrame({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-28 py-20 sm:py-24 lg:py-28">
      <div className="premium-shell">{children}</div>
    </section>
  );
}

function VisualCard({ visual }: { visual: (typeof projects)[number]["visual"] }) {
  const copy =
    visual === "jet-engine"
      ? "A mission control dashboard with an active fleet overview."
      : visual === "birthday"
      ? "A soft glowing celebration moment."
      : visual === "bert"
        ? "An AI pipeline tuned for context and clarity."
        : visual === "vyapo"
          ? "A laptop and mobile experience, displayed side by side."
          : "A motion-first portfolio built for polish.";

  if (visual === "jet-engine") {
    return (
      <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-white/10 bg-[#070b12] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-5">
        <div className="relative h-full min-h-[360px] overflow-hidden rounded-[28px] border border-slate-800 bg-black">
          <Image
            src="/images/jet-engine.png"
            alt="Jet Engine dashboard preview"
            fill
            priority
            sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 48vw, 92vw"
            className="object-cover object-top"
          />
        </div>
        <div className="pointer-events-none absolute left-6 top-6 rounded-full border border-sky-400/25 bg-sky-400/12 px-4 py-2 text-xs uppercase tracking-[0.28em] text-sky-300">
          Live telemetry
        </div>
      </div>
    );
  }

  if (visual === "vyapo") {
    return (
      <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-white/10 bg-[#f4efe9] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-5">
        <div className="relative h-full min-h-[360px] overflow-hidden rounded-[28px] border border-slate-200 bg-white">
          <Image
            src="/images/vyapo.png"
            alt="Vyapo product interface"
            fill
            priority
            sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 48vw, 92vw"
            className="object-cover object-top"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f4efe9] to-transparent" />
        <div className="pointer-events-none absolute right-8 top-8 rounded-full border border-emerald-400/30 bg-emerald-400/12 px-4 py-2 text-xs uppercase tracking-[0.28em] text-emerald-300">
          Real preview
        </div>
      </div>
    );
  }

  if (visual === "bert") {
    return (
      <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0c1020] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(244,114,182,0.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
        <div className="relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden rounded-[28px] border border-cyan-300/15 bg-[#11162a] p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70">BERT analyzer</p>
              <p className="mt-3 max-w-sm text-2xl leading-tight text-white">
                Paste a news story and get an instant fake-news prediction.
              </p>
            </div>
            <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-100">
              NLP
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-white/10 bg-black/25 p-4">
            <div className="flex items-center justify-between gap-4 text-sm text-white/58">
              <span>Model confidence</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em]">
                Production preview
              </span>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-rose-400/20 bg-rose-400/10 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-rose-100/70">Prediction</p>
                <p className="mt-3 text-3xl font-semibold text-white">FAKE</p>
                <p className="mt-2 text-sm text-white/64">BERT flagged the article as likely misleading.</p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/6 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Fake</p>
                  <p className="mt-3 text-2xl font-semibold text-white">61.41%</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/6 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Real</p>
                  <p className="mt-3 text-2xl font-semibold text-white">38.59%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(168,85,247,0.18),transparent_55%)]" />
      <div className="relative flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/55">{visual}</p>
          <p className="mt-3 max-w-md text-2xl leading-tight text-white">{copy}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {["Design", "Motion", "Clarity"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/78">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  }

function ProjectSection() {
  return (
    <div className="space-y-8">
      {projects.map((project, index) => {
        const reversed = index % 2 === 1;
        return (
          <Reveal key={project.title} delay={index * 0.08}>
            <article className="premium-card overflow-hidden p-4 sm:p-6 lg:p-8">
              <div className={`grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/66">
                      Case Study
                    </span>
                    <span className="rounded-full bg-gradient-to-r from-violet-500/35 to-indigo-500/25 px-4 py-2 text-xs text-white/90">
                      {project.statLabel}: {project.statValue}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((item) => (
                      <span key={item} className="premium-pill text-xs uppercase tracking-[0.22em] text-white/72">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <MagneticButton href={project.github} variant="secondary" icon={FaGithub}>
                      GitHub
                    </MagneticButton>
                    <MagneticButton href={project.live} icon={ExternalLink}>
                      Live Demo
                    </MagneticButton>
                  </div>
                </div>

                <VisualCard visual={project.visual} />
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

export function BelowFold() {
  return (
    <>
      <SectionFrame id="about">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="space-y-6">
              <SectionHeading
                eyebrow="About Me"
                title="I'm an Aspiring Software Engineer."
                description="Currently, I'm studying Electronics & Communication Engineering at UEM Kolkata."
              />
              <p className="premium-subtitle">
                An ECE student passionate about software engineering and modern web technologies. I enjoy building projects, solving coding challenges, and continuously learning to become a better developer every day.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="premium-card grid gap-4 p-5 sm:p-6">
              {aboutTimeline.map((item, index) => (
                <div key={item.title} className="grid grid-cols-[auto_1fr] gap-4">
                  <div className="flex flex-col items-center">
                    <span className="h-4 w-4 rounded-full bg-violet-300 shadow-[0_0_18px_rgba(196,181,253,0.95)]" />
                    {index < aboutTimeline.length - 1 ? (
                      <span className="mt-2 h-full w-px bg-[linear-gradient(180deg,rgba(196,181,253,0.8),transparent)]" />
                    ) : null}
                  </div>
                  <div className="pb-6">
                    <h3 className="text-lg font-medium text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/68">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionFrame>

      <SectionFrame id="education">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="A timeline shaped by engineering."
            description="A focused academic path that complements the software I build and the problems I practice."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {educationHighlights.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05}>
              <div className="premium-card h-full p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/48">{item.label}</p>
                <p className="mt-4 text-lg leading-7 text-white/88">{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionFrame>

      <SectionFrame id="experience">
        <Reveal>
          <SectionHeading
            eyebrow="Experience & Journey"
            title="Learning in public, one card at a time."
            description="Since I do not have professional experience yet, these are the experiences that are shaping my journey."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {journeyCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="premium-card h-full p-5">
                  <div className={`rounded-[24px] bg-gradient-to-br ${item.accent} p-[1px]`}>
                    <div className="rounded-[23px] bg-[#12091f]/90 p-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-xl font-medium text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/68">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </SectionFrame>

      <SectionFrame id="projects">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work with a premium finish."
            description="Alternating layouts, motion-rich visuals, and focused summaries keep the story clear."
          />
        </Reveal>
        <div className="mt-10">
          <ProjectSection />
        </div>
      </SectionFrame>

      <SectionFrame id="skills">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools, stacks, and concepts I keep close."
            description="These badges summarize the core areas I reach for while designing and building."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.05}>
              <div className="premium-card h-full p-5 sm:p-6">
                <p className="section-kicker">{group.label}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {group.items.map((item) => (
                    <div
                      key={item.label}
                      className={`group flex min-h-[96px] items-center justify-center rounded-[24px] border border-white/10 bg-gradient-to-br ${item.accent} p-[1px] transition-transform duration-300 hover:-translate-y-1`}
                    >
                      <div className="flex h-full w-full flex-col items-center justify-center rounded-[23px] bg-[#12091f]/92 px-4 py-4 text-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/8 text-white shadow-[0_0_30px_rgba(168,85,247,0.16)] transition-transform duration-300 group-hover:scale-105">
                          <item.icon className="h-7 w-7" />
                        </div>
                        <span className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-white/78">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionFrame>

      <SectionFrame id="achievements">
        <Reveal>
          <SectionHeading
            eyebrow="Achievements"
            title="Glowing proof of steady momentum."
            description="Animated counters and premium cards keep the highlights visible without adding clutter."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Reveal key={achievement.label} delay={index * 0.05}>
                <div className="premium-card h-full p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,rgba(139,92,246,0.28),rgba(99,102,241,0.12))] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="font-[family-name:var(--font-heading)] text-5xl tracking-[-0.05em] text-white">
                      <AnimatedNumber value={achievement.value} suffix={achievement.suffix} />
                    </p>
                  </div>
                  <h3 className="mt-5 text-xl font-medium text-white">{achievement.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{achievement.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </SectionFrame>

      <SectionFrame id="contact">
        <Reveal>
          <div className="premium-card overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="space-y-6">
                <p className="section-kicker">Contact</p>
                <h2 className="premium-title">Let&apos;s Build Something Amazing</h2>
                <p className="premium-subtitle">
                  I&apos;m always open to internship opportunities, collaborations, and exciting software projects.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <MagneticButton key={item.label} href={item.href} variant="secondary" icon={Icon}>
                      {item.label}
                    </MagneticButton>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </SectionFrame>

      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="premium-shell flex flex-col gap-3 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Designed &amp; Developed by{" "}
            <a
              href="https://www.linkedin.com/in/devashishofficial/"
              target="_blank"
              rel="noreferrer"
              className="text-white/85 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white/70"
            >
              Deavshish Gorai
            </a>
          </p>
          <p>© 2026 All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
