"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import ProjectCard from "@/components/sections/ProjectCard";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    title: "FPL Fixture Difficulty Planner",
    description:
      "Web app that pulls live data from the Fantasy Premier League API and visualises fixture difficulty ratings to help players plan transfers and captain picks across upcoming gameweeks.",
    stack: ["Python", "Django", "REST API", "FPL API"],
    github: "https://github.com/lloydvheremu",
    type: "personal",
  },
  {
    title: "ZRA SmartInvoice Integration",
    description:
      "Custom Odoo module integrating with the Zambia Revenue Authority's SmartInvoice API for real-time fiscal compliance. Handles invoice submission, credit notes, and cryptographic signature verification.",
    stack: ["Python", "Odoo", "REST APIs", "PostgreSQL"],
    type: "professional",
  },
  {
    title: "ZIMRA Fiscalisation Module",
    description:
      "End-to-end fiscalisation integration for Zimbabwe Revenue Authority. Covers POS and invoice flows with cryptographic device communication, QR code generation, and real-time submission.",
    stack: ["Python", "JavaScript", "Odoo OWL", "PostgreSQL", "QWeb"],
    type: "professional",
  },
  {
    title: "Online Learning Platform",
    description:
      "Contributed front-end development to an e-learning platform during internship at WireSpeed Systems. Built responsive course pages and interactive UI components.",
    stack: ["Next.js 14", "JavaScript", "Tailwind CSS"],
    type: "professional",
  },
  {
    title: "GRC Platform Configuration",
    description:
      "QA testing and module configuration for a Governance, Risk & Compliance software platform. Wrote automated test suites and performed load testing for enterprise clients.",
    stack: ["Corporater BMP", "Katalon", "JMeter"],
    type: "professional",
  },
];

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="font-mono text-xs text-[#00ff41] tracking-widest mb-3">&gt; PROJECTS</p>
        <h1 className="font-mono text-4xl font-bold text-[#e0e0e0]">My Work</h1>
        <p className="font-mono text-sm text-[#666666] mt-3 max-w-xl">
          A mix of personal projects and professional client work. Production systems used by real businesses.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </PageWrapper>
  );
}
