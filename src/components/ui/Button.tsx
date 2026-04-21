import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}

export default function Button({ href, children, variant = "primary", external }: ButtonProps) {
  const base =
    "inline-block font-mono text-sm px-6 py-3 rounded border transition-all duration-200 cursor-none";
  const styles =
    variant === "primary"
      ? "border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-[#0a0a0a] hover:shadow-[0_0_16px_#00ff41]"
      : "border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8] hover:text-[#0a0a0a] hover:shadow-[0_0_16px_#00b4d8]";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
