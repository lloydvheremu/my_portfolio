import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0a0a0a] py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-[#666666]">
          <span className="text-[#00ff41]">©</span> {new Date().getFullYear()} Lloyd Vheremu
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/lloydvheremu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-[#666666] hover:text-[#00ff41] transition-colors duration-200"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/lloydvheremu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-[#666666] hover:text-[#00b4d8] transition-colors duration-200"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:lloydblessin@outlook.com"
            className="font-mono text-sm text-[#666666] hover:text-[#00ff41] transition-colors duration-200"
          >
            Email
          </Link>
        </div>
        <p className="font-mono text-xs text-[#666666]">
          Built with Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
