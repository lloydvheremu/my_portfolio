import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <div className={`mx-auto max-w-6xl px-6 py-16 ${className}`}>
      {children}
    </div>
  );
}
