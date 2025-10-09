"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "./SectionTitle";
import { about } from "../data/about";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-line",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-black text-white py-32"
    >
      <SectionTitle title="About Me" />
      <div className="container mx-auto px-6 md:mt-[200px]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="about-line flex justify-center">
            <img
              src="/imgs/icons/github_logo_icon_229278.png"
              alt="profile"
              className="w-56 h-56 object-cover rounded-full shadow-[0_0_40px_#8b5cf6]"
            />
          </div>

          <div className="space-y-5">
            <h2 className="about-line text-3xl font-semibold">
              Hey there! <span className="wave">👋</span>
            </h2>
            <p className="about-line text-white/80">{about.description1}</p>
            <p className="about-line text-white/80">{about.description2}</p>
            <p className="about-line text-white/80">{about.description3}</p>
          </div>
        </div>
      </div>
      <div className="mt-[200px]">
        <SectionTitle title="About Me" end />
      </div>
    </section>
  );
}
