"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import Timeline from "@/components/sections/Timeline";
import type { Experience } from "@/types";

const entries: Experience[] = [
  {
    company: "M&J Consultants",
    role: "Software Developer",
    period: "Dec 2024 – Mar 2026",
    type: "work",
    bullets: [
      "Built ZRA SmartInvoice integration — custom Odoo module for real-time fiscal compliance",
      "Developed ZIMRA fiscalisation module with POS and invoice flows",
      "Custom Python/JavaScript Odoo modules for ERP automation",
      "REST API integrations and PostgreSQL database work",
    ],
  },
  {
    company: "WireSpeed Systems",
    role: "Graduate Trainee",
    period: "Oct 2024 – Dec 2024",
    type: "work",
    bullets: [
      "Front-end development for an e-learning platform using Next.js 14",
      "QA testing for a GRC (Governance, Risk & Compliance) platform",
      "Automated test suites with Katalon and load testing with JMeter",
    ],
  },
  {
    company: "M&J Consultants",
    role: "Industrial Attachment (Intern)",
    period: "Nov 2023 – Jul 2024",
    type: "work",
    bullets: [
      "Built custom Odoo modules in Python and JavaScript",
      "Designed QWeb reports for client-facing documents",
      "REST API integrations with third-party services",
      "Deployed and maintained applications on Docker and Nginx",
    ],
  },
  {
    company: "NUST Zimbabwe",
    role: "BSc Computer Science (Hons) — 2.1",
    period: "Graduated 2024",
    type: "education",
    bullets: [
      "Relevant modules: AI, Software Engineering, Database Systems",
      "Web Development, Mobile Development, Networking",
      "Final year project in software engineering",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="font-mono text-xs text-[#00ff41] tracking-widest mb-3">&gt; EXPERIENCE</p>
        <h1 className="font-mono text-4xl font-bold text-[#e0e0e0]">Experience</h1>
        <p className="font-mono text-sm text-[#666666] mt-3 max-w-xl">
          2+ years commercial experience across ERP development, full-stack web, and QA engineering.
        </p>
      </motion.div>

      <Timeline entries={entries} />
    </PageWrapper>
  );
}
