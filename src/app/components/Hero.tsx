"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Intro stagger
      gsap.from(".hero-line", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
      });

      // Scroll reveal cho mọi .reveal trong trang
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Parallax nền nhẹ
      gsap.to(".parallax", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden">
      <div className="parallax pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent" />
      <div className="container mx-auto px-6 py-28">
        <span className="hero-line inline-block rounded-full bg-primary/30 px-3 py-1 text-sm">
          Full-stack Developer
        </span>
        <h1 className="hero-line mt-4 text-5xl md:text-6xl font-bold text-red-600">
          Hi, I’m Mason
        </h1>
        <p className="hero-line mt-4 max-w-xl text-lg text-slate-600">
          React / Next.js / NestJS — I build performant, animated web
          experiences.
        </p>
        <a
          href="#work"
          className="hero-line mt-8 inline-block rounded-2xl bg-black px-5 py-3 text-white"
        >
          View Work
        </a>
      </div>
    </section>
  );
}
