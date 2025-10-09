"use client";

import Link from "next/link";
import { useActiveSection } from "../hooks/useActiveSection";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const active = useActiveSection([
    "hero",
    "about",
    "skills",
    "projects",
    "contact",
  ]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    // scroll smooth bằng JS (mượt và không giật)
    const yOffset = -80; // chiều cao header
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          href="/"
          className="font-[ClashDisplay] text-2xl font-semibold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent select-none"
        >
          Portfolio<span className="text-pink-500">.</span>
        </Link>

        <nav className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href.replace("#", ""))}
              className={`font-mono text-md tracking-[0.15em] transition-all duration-300 ${
                active === item.href.replace("#", "")
                  ? "text-violet-500 font-semibold underline underline-offset-8"
                  : "text-white/70 hover:text-white hover:underline hover:underline-offset-8"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/ThanhHieu-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-violet-500 text-white/90 text-sm px-5 py-1.5 rounded-md hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:text-white transition-all duration-300 flex items-center gap-1"
        >
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
