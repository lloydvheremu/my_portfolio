"use client";

import dynamic from "next/dynamic";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import GlitchText from "@/components/effects/GlitchText";
import Button from "@/components/ui/Button";

const MatrixRain = dynamic(() => import("@/components/effects/MatrixRain"), { ssr: false });

const skills = [
  "Python", "Django", "JavaScript", "TypeScript", "Next.js", "React",
  "PostgreSQL", "REST APIs", "Docker", "Odoo", "OWL", "QWeb",
  "Tailwind CSS", "Git", "Linux", "Flutter", "Nginx", "Bootstrap",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="scanlines relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center overflow-hidden">
        <MatrixRain />

        <div className="relative z-10 flex flex-col items-center text-center px-6 gap-6">
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
            <p className="font-mono text-sm text-[#00ff41] mb-2 tracking-[0.3em]">
              &gt; HELLO WORLD
            </p>
            <GlitchText
              text="Lloyd Vheremu"
              className="text-5xl sm:text-7xl font-bold text-[#e0e0e0] font-mono"
            />
          </motion.div>

          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-mono text-xl text-[#00ff41] tracking-widest"
            style={{ textShadow: "0 0 10px #00ff41" }}
          >
            Software Developer
          </motion.p>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-mono text-sm text-[#666666] max-w-lg"
          >
            Full-Stack Developer with 2+ years building production systems in Python and JavaScript
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button href="/projects">View My Work</Button>
            <Button href="/contact" variant="secondary">Contact Me</Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="font-mono text-xs text-[#666666]">scroll</span>
          <div className="bounce-y w-px h-8 bg-gradient-to-b from-[#00ff41] to-transparent" />
        </div>
      </section>

      {/* About preview */}
      <section className="border-t border-[#1a1a1a] py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p className="font-mono text-xs text-[#00ff41] tracking-widest">&gt; ABOUT_ME</p>
            <p className="font-mono text-[#e0e0e0] leading-relaxed max-w-2xl">
              CS graduate from NUST Zimbabwe with 2+ years of commercial experience building
              production-grade software. Specialised in Python, Django, JavaScript, and Odoo ERP
              integrations — including fiscal compliance systems for ZRA and ZIMRA.
            </p>
            <Link
              href="/about"
              className="font-mono text-sm text-[#00ff41] hover:underline w-fit"
            >
              Read more →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills marquee */}
      <section className="border-t border-[#1a1a1a] py-8 overflow-hidden">
        <div className="marquee-track">
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={i}
              className="font-mono text-sm text-[#666666] px-6 shrink-0 hover:text-[#00ff41] transition-colors"
            >
              <span className="text-[#00ff41]">▸</span> {skill}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
