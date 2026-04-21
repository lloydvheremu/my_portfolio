"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import PageWrapper from "@/components/layout/PageWrapper";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email is required";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      window.location.href = `mailto:lloydblessin@outlook.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const field = (
    id: keyof FormState,
    label: string,
    type: "text" | "email" | "textarea" = "text"
  ) => (
    <div className="flex flex-col gap-1">
      <label className="font-mono text-xs text-[#666666]">
        <span className="text-[#00ff41]">&gt; </span>{label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          rows={5}
          value={form[id]}
          onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
          className={`bg-[#111111] border rounded font-mono text-sm text-[#e0e0e0] px-4 py-3
                      focus:outline-none focus:border-[#00ff41] transition-colors
                      placeholder:text-[#333] resize-none
                      ${errors[id] ? "border-red-500" : "border-[#1a1a1a]"}`}
          placeholder={`// enter your ${id}`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={form[id]}
          onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
          className={`bg-[#111111] border rounded font-mono text-sm text-[#e0e0e0] px-4 py-3
                      focus:outline-none focus:border-[#00ff41] transition-colors
                      placeholder:text-[#333]
                      ${errors[id] ? "border-red-500" : "border-[#1a1a1a]"}`}
          placeholder={`// enter your ${id}`}
        />
      )}
      {errors[id] && (
        <p className="font-mono text-xs text-red-400">{errors[id]}</p>
      )}
    </div>
  );

  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="font-mono text-xs text-[#00ff41] tracking-widest mb-3">&gt; CONTACT</p>
        <h1 className="font-mono text-4xl font-bold text-[#e0e0e0]">Get In Touch</h1>
        <p className="font-mono text-sm text-[#666666] mt-3 max-w-xl">
          Open to remote software developer roles. Drop me a message or reach out directly.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="border border-[#1a1a1a] bg-[#111111] rounded-lg p-8">
            <p className="font-mono text-xs text-[#444] mb-6">
              <span className="text-[#00ff41]">$</span> ./send_message.sh
            </p>

            {status === "success" ? (
              <div className="font-mono text-center py-8">
                <p className="text-[#00ff41] text-lg mb-2">✓ Message sent!</p>
                <p className="text-sm text-[#666666]">I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 font-mono text-xs text-[#00ff41] border border-[#00ff41] px-4 py-2 rounded hover:bg-[#00ff41] hover:text-[#0a0a0a] transition-all"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {field("name", "Your Name")}
                {field("email", "Your Email", "email")}
                {field("message", "Your Message", "textarea")}

                {status === "error" && (
                  <p className="font-mono text-xs text-red-400">
                    Something went wrong. Try emailing directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="font-mono text-sm border border-[#00ff41] text-[#00ff41] px-6 py-3 rounded
                             hover:bg-[#00ff41] hover:text-[#0a0a0a] hover:shadow-[0_0_16px_#00ff41]
                             transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "[ Send Message ]"}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <p className="font-mono text-xs text-[#00ff41] tracking-widest">&gt; DIRECT_LINKS</p>

          {[
            {
              label: "Email",
              value: "lloydblessin@outlook.com",
              href: "mailto:lloydblessin@outlook.com",
              color: "green" as const,
            },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/lloydvheremu",
              href: "https://www.linkedin.com/in/lloydvheremu",
              color: "cyan" as const,
            },
            {
              label: "GitHub",
              value: "github.com/lloydvheremu",
              href: "https://github.com/lloydvheremu",
              color: "green" as const,
            },
          ].map(({ label, value, href, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group border border-[#1a1a1a] bg-[#111111] rounded-lg px-6 py-4 flex flex-col gap-1
                         hover:border-[#00ff41]/40 hover:shadow-[0_0_12px_rgba(0,255,65,0.08)]
                         transition-all duration-200"
            >
              <span className="font-mono text-xs text-[#666666]">{label}</span>
              <span
                className={`font-mono text-sm ${
                  color === "cyan"
                    ? "text-[#00b4d8] group-hover:text-[#00b4d8]"
                    : "text-[#00ff41] group-hover:text-[#00ff41]"
                } transition-colors`}
              >
                {value}
              </span>
            </a>
          ))}

          <div className="mt-4 border border-[#1a1a1a] bg-[#111111] rounded-lg p-5">
            <p className="font-mono text-xs text-[#666666] leading-relaxed">
              <span className="text-[#00ff41]">$</span> whoami<br />
              <span className="text-[#e0e0e0]">Lloyd B. Vheremu</span><br /><br />
              <span className="text-[#00ff41]">$</span> location<br />
              <span className="text-[#e0e0e0]">Ruwa, Zimbabwe → Remote globally</span><br /><br />
              <span className="text-[#00ff41]">$</span> availability<br />
              <span className="text-[#e0e0e0]">Open to remote roles</span>
            </p>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
