import {
  Brain,
  Code2,
  HeartHandshake,
  Layers3,
  Medal,
  Rocket,
  Sparkles,
  Trophy,
  Workflow,
} from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import {
  SiCplusplus,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVscodium,
} from "react-icons/si";
import type { ComponentType } from "react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconComponent;
};

export type ProjectVisual = "birthday" | "bert" | "portfolio";

export type IconComponent = ComponentType<{ className?: string }>;

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  visual: ProjectVisual;
  accent: string;
  reverse?: boolean;
  statLabel: string;
  statValue: string;
};

export type SkillGroup = {
  label: string;
  items: SkillItem[];
};

export type SkillItem = {
  label: string;
  icon: IconComponent;
  accent: string;
};

export type JourneyCard = {
  title: string;
  description: string;
  icon: IconComponent;
  accent: string;
};

export type Achievement = {
  label: string;
  description: string;
  value: number;
  suffix?: string;
  icon: IconComponent;
};

export type GitHubStat = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:devashish@example.com", icon: FaEnvelope },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/devashishofficial/", icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/devashish", icon: FaGithub },
  { label: "Resume", href: "/resume", icon: Sparkles },
];

export const aboutTimeline = [
  {
    title: "Curiosity",
    description: "I started by exploring how software can simplify everyday problems and create thoughtful digital experiences.",
  },
  {
    title: "Consistency",
    description: "My learning routine centers on DSA, web fundamentals, and shipping small projects with care.",
  },
  {
    title: "Growth",
    description: "I am steadily building the habits, taste, and technical depth needed for impactful software engineering.",
  },
];

export const educationHighlights = [
  {
    label: "University",
    value: "University of Engineering & Management (UEM), Kolkata",
  },
  {
    label: "Degree",
    value: "Bachelor of Technology",
  },
  {
    label: "Branch",
    value: "Electronics & Communication Engineering",
  },
  {
    label: "Status",
    value: "2024 - Present",
  },
  {
    label: "Current Year",
    value: "Second Year",
  },
];

export const journeyCards: JourneyCard[] = [
  {
    title: "Open Source Learning",
    description: "Exploring collaborative workflows, code reviews, and the habits behind maintainable software.",
    icon: FaGithub,
    accent: "from-fuchsia-500/30 via-violet-500/20 to-indigo-500/20",
  },
  {
    title: "Learning Full Stack Development",
    description: "Building from polished interfaces to APIs, data flow, and deployment-ready architecture.",
    icon: Layers3,
    accent: "from-indigo-500/30 via-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Practicing problem solving with disciplined patterns, edge-case thinking, and cleaner logic.",
    icon: Brain,
    accent: "from-violet-500/30 via-fuchsia-500/20 to-rose-500/20",
  },
  {
    title: "Hackathon Participation",
    description: "Turning ideas into demos quickly while balancing creativity, collaboration, and execution.",
    icon: Trophy,
    accent: "from-amber-400/30 via-orange-500/20 to-fuchsia-500/20",
  },
  {
    title: "Personal Projects",
    description: "Shipping focused projects that make my learning visible and help me refine product judgment.",
    icon: Rocket,
    accent: "from-emerald-400/30 via-cyan-500/20 to-sky-500/20",
  },
];

export const projects: Project[] = [
  {
    title: "Birthday Wish Website",
    description: "Modern responsive birthday website with animations.",
    tech: ["HTML", "CSS", "JavaScript", "Next.js"],
    github: "https://github.com/devashish/birthday-wish-website",
    live: "https://birthday-wish-website.vercel.app",
    visual: "birthday",
    accent: "from-fuchsia-500/35 via-violet-500/20 to-indigo-500/20",
    statLabel: "Celebration-ready",
    statValue: "01",
  },
  {
    title: "Fake News Detection using BERT",
    description: "AI-powered fake news detection system built with Python, Transformers, BERT and Streamlit.",
    tech: ["Python", "Transformers", "BERT", "Streamlit"],
    github: "https://github.com/devashish/fake-news-detection-bert",
    live: "https://fake-news-detection-bert.streamlit.app",
    visual: "bert",
    accent: "from-cyan-500/25 via-indigo-500/20 to-fuchsia-500/20",
    reverse: true,
    statLabel: "AI pipeline",
    statValue: "04",
  },
  {
    title: "Portfolio Website",
    description: "This portfolio showcasing my skills and projects.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
    github: "https://github.com/devashish/portfolio",
    live: "https://devashish-portfolio.vercel.app",
    visual: "portfolio",
    accent: "from-emerald-400/30 via-cyan-500/20 to-indigo-500/20",
    statLabel: "Sections",
    statValue: "07",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      { label: "C++", icon: SiCplusplus, accent: "from-blue-500/35 to-sky-400/20" },
      { label: "Python", icon: SiPython, accent: "from-amber-400/35 to-sky-500/20" },
      { label: "JavaScript", icon: SiJavascript, accent: "from-yellow-300/40 to-amber-400/20" },
      { label: "TypeScript", icon: SiTypescript, accent: "from-sky-500/35 to-indigo-500/20" },
      { label: "HTML", icon: SiHtml5, accent: "from-orange-500/35 to-red-500/20" },
      { label: "CSS", icon: SiCss, accent: "from-sky-500/35 to-blue-500/20" },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { label: "React", icon: SiReact, accent: "from-cyan-400/35 to-sky-500/20" },
      { label: "Next.js", icon: SiNextdotjs, accent: "from-white/20 to-white/5" },
      { label: "Node.js", icon: SiNodedotjs, accent: "from-lime-400/35 to-emerald-500/20" },
      { label: "Express", icon: SiExpress, accent: "from-zinc-300/20 to-zinc-500/10" },
      { label: "Tailwind", icon: SiTailwindcss, accent: "from-cyan-400/35 to-blue-500/20" },
    ],
  },
  {
    label: "Database",
    items: [{ label: "MongoDB", icon: SiMongodb, accent: "from-emerald-400/35 to-green-500/20" }],
  },
  {
    label: "Tools",
    items: [
      { label: "Git", icon: SiGit, accent: "from-orange-500/35 to-red-500/20" },
      { label: "GitHub", icon: SiGithub, accent: "from-white/15 to-white/5" },
      { label: "VS Code", icon: SiVscodium, accent: "from-sky-500/35 to-cyan-500/20" },
      { label: "Postman", icon: SiPostman, accent: "from-orange-500/35 to-amber-500/20" },
    ],
  },
  {
    label: "Concepts",
    items: [
      { label: "DSA", icon: Code2, accent: "from-violet-500/35 to-fuchsia-500/20" },
      { label: "OOP", icon: Layers3, accent: "from-indigo-500/35 to-violet-500/20" },
      { label: "REST APIs", icon: Workflow, accent: "from-cyan-400/35 to-blue-500/20" },
      { label: "Responsive", icon: Sparkles, accent: "from-fuchsia-500/35 to-rose-500/20" },
    ],
  },
];

export const achievements: Achievement[] = [
  {
    label: "Solved DSA problems",
    description: "Focused practice across recursion, arrays, strings, and data structures.",
    value: 150,
    suffix: "+",
    icon: Code2,
  },
  {
    label: "Built personal projects",
    description: "Projects that sharpen UI, logic, and deployment habits.",
    value: 10,
    suffix: "+",
    icon: Sparkles,
  },
  {
    label: "Hackathon participation",
    description: "Fast-paced problem solving with a product mindset.",
    value: 3,
    suffix: "+",
    icon: Trophy,
  },
  {
    label: "Continuous learning",
    description: "A steady rhythm of new tools, new concepts, and refinement.",
    value: 365,
    suffix: "",
    icon: Workflow,
  },
  {
    label: "NPTEL certifications",
    description: "Structured learning that complements hands-on work.",
    value: 2,
    suffix: "+",
    icon: Medal,
  },
  {
    label: "GitHub contributions",
    description: "Commit consistency across coding, iteration, and improvements.",
    value: 100,
    suffix: "+",
    icon: HeartHandshake,
  },
];

export const gitHubStats: GitHubStat[] = [
  {
    label: "Commits",
    value: 387,
    suffix: "+",
    description: "A steady output of feature work, fixes, and refinements.",
  },
  {
    label: "Repositories",
    value: 12,
    suffix: "+",
    description: "A growing library of learning projects and experiments.",
  },
  {
    label: "Top streak",
    value: 24,
    suffix: "/7",
    description: "Persistent curiosity across days, nights, and deadlines.",
  },
  {
    label: "Languages",
    value: 4,
    suffix: "+",
    description: "Breadth across frontend, backend, and problem solving.",
  },
];

export const topLanguages = [
  { label: "JavaScript", width: 86 },
  { label: "TypeScript", width: 78 },
  { label: "Python", width: 64 },
  { label: "C++", width: 52 },
];

export const contributionGraph = Array.from({ length: 56 }, (_, index) => {
  const row = Math.floor(index / 8);
  const column = index % 8;
  const level = ((row * 3 + column * 2 + (index % 5)) % 5) as 0 | 1 | 2 | 3 | 4;
  return level;
});
