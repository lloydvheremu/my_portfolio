"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/types";

interface TimelineProps {
  entries: Experience[];
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-[#1a1a1a]" />

      <div className="flex flex-col gap-12">
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-12"
          >
            {/* Dot */}
            <div
              className={`absolute left-0 top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-mono
                ${entry.type === "education"
                  ? "border-[#00b4d8] bg-[#0a0a0a] text-[#00b4d8]"
                  : "border-[#00ff41] bg-[#0a0a0a] text-[#00ff41]"
                }`}
              style={{
                boxShadow: entry.type === "education"
                  ? "0 0 8px rgba(0,180,216,0.4)"
                  : "0 0 8px rgba(0,255,65,0.4)",
              }}
            >
              {entry.type === "education" ? "🎓" : ">"}
            </div>

            <div className="border border-[#1a1a1a] bg-[#111111] rounded-lg p-6 hover:border-[#00ff41]/30 transition-colors duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-mono font-semibold text-[#e0e0e0]">{entry.role}</h3>
                  <p className={`font-mono text-sm ${entry.type === "education" ? "text-[#00b4d8]" : "text-[#00ff41]"}`}>
                    {entry.company}
                  </p>
                </div>
                <span className="font-mono text-xs text-[#666666] shrink-0 border border-[#1a1a1a] px-2 py-1 rounded">
                  {entry.period}
                </span>
              </div>

              <ul className="flex flex-col gap-1.5">
                {entry.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-2 text-sm text-[#666666]">
                    <span className="text-[#00ff41] shrink-0">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
