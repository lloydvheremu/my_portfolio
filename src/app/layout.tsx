import type { Metadata } from "next";
import { JetBrains_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/effects/CustomCursor";
import KeypressRipple from "@/components/effects/KeypressRipple";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lloyd Vheremu — Software Developer",
  description:
    "Full-Stack Developer with 2+ years building production systems in Python and JavaScript. Open to remote software developer roles globally.",
  keywords: ["Software Developer", "Full-Stack", "Python", "JavaScript", "Next.js", "Odoo", "Remote"],
  openGraph: {
    title: "Lloyd Vheremu — Software Developer",
    description: "Full-Stack Developer with 2+ years building production systems in Python and JavaScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${firaCode.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#e0e0e0]">
        <CustomCursor />
        <KeypressRipple />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
