"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero, socials } from "../data/hero";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-black text-white min-h-[90vh] flex items-center"
    >
      <div className="parallax pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />

      <div className="container mx-auto px-6">
        <span className="hero-line block text-lg md:text-2xl text-white/80">
          Hi! My name is,
        </span>
        <h1
          className="hero-line mt-3 text-[4rem] md:text-[8rem] font-extrabold leading-[1.1]
             animated-gradient-text whitespace-nowrap"
        >
          {hero.name}
        </h1>
        <p className="hero-line mt-6 text-lg md:text-2xl text-white/90">
          {hero.description}
        </p>
        <p className="hero-line mt-3 text-lg md:text-2xl text-white/90 ">
          {hero.subDescription}
        </p>
        <div className="hero-line flex gap-10 mt-10">
          {socials.map(
            (item) =>
              item.icon && (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center hover:opacity-100 opacity-80 transition-all duration-300"
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="h-8 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              )
          )}
        </div>
      </div>
    </section>
  );
}
