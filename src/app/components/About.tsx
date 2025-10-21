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
    <section id="about" ref={sectionRef} className=" bg-black text-white pt-32">
      <SectionTitle title="About Me" />
      <div className="container mx-auto px-6 mt-[50px] xl:mt-[200px]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="about-line flex justify-center">
            <img
              src="/imgs/logo.png"
              alt="profile"
              className="w-100 h-100 object-cover rounded-full "
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
      <div className="mt-[50px] xl:mt-[200px]">
        <SectionTitle title="About Me" end />
      </div>
    </section>
  );
}
