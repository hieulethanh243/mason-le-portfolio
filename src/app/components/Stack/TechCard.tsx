/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

interface TechCardProps {
  name: string;
  iconUrl: string;
  delay?: number;
  type: string;
  url: string;
}

export default function TechCard({
  name,
  iconUrl,
  type,
  delay = 0,
  url = "#",
}: TechCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      }
    );
  }, [delay]);

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div
        ref={cardRef}
        className="relative group flex flex-col items-center justify-center p-3 
                 rounded-xl bg-gradient-to-b from-[#1a0b2e] to-[#0d061a]
                 border border-white/10 shadow-[0_0_12px_rgba(255,255,255,0.05)]
                 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]
                 transition-all duration-300"
      >
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30
                      bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.6),transparent_70%)]
                      transition-opacity duration-500"
        />

        <div className="flex flex-col items-center space-y-3 relative z-10">
          <Image
            src={iconUrl}
            alt={name}
            className="object-contain group-hover:scale-110 transition-transform duration-300 hoverable"
            width={40}
            height={40}
          />

          <p className="text-center text-lg font-semibold text-white">{name}</p>
        </div>
      </div>
    </Link>
  );
}
