"use client";

import { motion } from "framer-motion";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative border border-[#1a1a1a] bg-[#111111] rounded-lg p-6
                 hover:border-[#00ff41]/50 hover:shadow-[0_0_20px_rgba(0,255,65,0.1)]
                 transition-all duration-300 flex flex-col gap-4"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-mono font-semibold text-[#e0e0e0] group-hover:text-[#00ff41] transition-colors duration-200">
          {project.title}
        </h3>
        <span className="shrink-0 text-xs font-mono px-2 py-0.5 rounded border border-[#1a1a1a] text-[#666666]">
          {project.type === "personal" ? "personal" : "professional"}
        </span>
      </div>

      <p className="text-sm text-[#666666] leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <Tag key={s} label={s} color="green" />
        ))}
      </div>

      <div className="flex gap-4 pt-2">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#00ff41] hover:underline transition-colors"
          >
            [ GitHub ]
          </a>
        ) : null}
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#00b4d8] hover:underline transition-colors"
          >
            [ Live ]
          </a>
        ) : null}
        {!project.github && !project.live && (
          <span className="font-mono text-xs text-[#666666]">[ Client work — private ]</span>
        )}
      </div>
    </motion.div>
  );
}
