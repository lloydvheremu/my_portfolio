interface TagProps {
  label: string;
  color?: "green" | "cyan";
}

export default function Tag({ label, color = "green" }: TagProps) {
  const styles =
    color === "cyan"
      ? "border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8]/10"
      : "border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10";

  return (
    <span
      className={`inline-block border px-2 py-0.5 text-xs font-mono rounded transition-colors duration-200 ${styles}`}
    >
      {label}
    </span>
  );
}
