"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/github", label: "GitHub" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-lg font-bold text-[#00ff41] hover:text-glow-green transition-all duration-200"
          style={{ textShadow: "0 0 8px #00ff41" }}
        >
          <span className="text-[#666666]">&gt; </span>lloyd_v
        </Link>

        <ul className="flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`
                    relative px-3 py-1.5 text-sm font-mono transition-all duration-200
                    ${active
                      ? "text-[#00ff41]"
                      : "text-[#666666] hover:text-[#e0e0e0]"
                    }
                  `}
                >
                  {active && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-px bg-[#00ff41]"
                      style={{ boxShadow: "0 0 6px #00ff41" }}
                    />
                  )}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
