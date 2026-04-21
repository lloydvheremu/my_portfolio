"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import Tag from "@/components/ui/Tag";

const skillGroups = [
  {
    label: "Backend",
    skills: ["Python", "Django", "PostgreSQL", "REST APIs", "Docker"],
    color: "green" as const,
  },
  {
    label: "Frontend",
    skills: ["JavaScript", "TypeScript", "Next.js", "React", "Tailwind CSS", "Bootstrap"],
    color: "cyan" as const,
  },
  {
    label: "ERP / Specialist",
    skills: ["Odoo v15–v19", "QWeb", "OWL Framework", "Fiscalisation APIs"],
    color: "green" as const,
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Linux", "SSH", "Nginx"],
    color: "cyan" as const,
  },
  {
    label: "Other",
    skills: ["Flutter", "Dart", "Java", "C/C++"],
    color: "green" as const,
  },
];

const interests = ["Chess", "Gaming", "Reading", "Soccer", "Sudoku"];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <motion.div {...fadeIn()} className="mb-12">
        <p className="font-mono text-xs text-[#00ff41] tracking-widest mb-3">&gt; ABOUT_ME</p>
        <h1 className="font-mono text-4xl font-bold text-[#e0e0e0]">About Me</h1>
      </motion.div>

      {/* Avatar + Bio */}
      <div className="flex flex-col md:flex-row gap-12 mb-16">
        {/* Avatar */}
        <motion.div {...fadeIn(0.1)} className="shrink-0">
          <div
            className="w-32 h-32 rounded-full border-2 border-[#00ff41] flex items-center justify-center text-3xl font-mono font-bold text-[#00ff41]"
            style={{ boxShadow: "0 0 20px rgba(0,255,65,0.3)", background: "#111111" }}
          >
            LV
          </div>
        </motion.div>

        {/* Bio */}
        <div className="flex flex-col gap-5">
          <motion.p {...fadeIn(0.2)} className="font-mono text-[#e0e0e0] leading-relaxed">
            I&apos;m a Computer Science graduate from NUST Zimbabwe with 2+ years of commercial
            software development experience. I hold a BSc Computer Science (Hons) 2.1 and have been
            writing production code since my industrial attachment in 2023.
          </motion.p>
          <motion.p {...fadeIn(0.3)} className="font-mono text-[#666666] leading-relaxed">
            My core stack is Python and JavaScript — building REST APIs with Django, creating
            custom Odoo ERP modules, integrating fiscal compliance systems (ZRA SmartInvoice, ZIMRA
            fiscalisation), and developing modern front-ends with Next.js and React. I&apos;m
            comfortable across the full stack, from Nginx config to OWL components.
          </motion.p>
          <motion.p {...fadeIn(0.4)} className="font-mono text-[#666666] leading-relaxed">
            I&apos;m actively looking for remote software developer roles where I can ship real
            features, work with a strong engineering team, and keep growing. I&apos;m based in
            Zimbabwe and open to working across any timezone.
          </motion.p>
        </div>
      </div>

      {/* Skills */}
      <motion.div {...fadeIn(0.2)} className="mb-16">
        <p className="font-mono text-xs text-[#00ff41] tracking-widest mb-6">&gt; SKILLS</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border border-[#1a1a1a] bg-[#111111] rounded-lg p-5 hover:border-[#00ff41]/30 transition-colors duration-200"
            >
              <h3 className="font-mono text-sm font-semibold text-[#e0e0e0] mb-3">
                <span className="text-[#00ff41]">#</span> {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill} label={skill} color={group.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interests */}
      <motion.div {...fadeIn(0.3)}>
        <p className="font-mono text-xs text-[#00ff41] tracking-widest mb-6">&gt; INTERESTS</p>
        <div className="flex flex-wrap gap-4">
          {interests.map((interest) => (
            <span
              key={interest}
              className="font-mono text-sm border border-[#1a1a1a] bg-[#111111] px-4 py-2 rounded-lg text-[#666666] hover:text-[#e0e0e0] hover:border-[#666666] transition-all duration-200"
            >
              {interest}
            </span>
          ))}
        </div>
      </motion.div>
    </PageWrapper>
  );
}
