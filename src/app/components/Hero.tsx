/* eslint-disable @next/next/no-img-element */
"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero, socials } from "../data/hero";
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
      <div className="container mx-auto px-6 grid xl:grid-cols-10 items-center gap-10 mt-[100px] sm:mt-[150px] xl:mt-0">
        <div className="xl:col-span-6 order-2 xl:order-1 text-center xl:text-left">
          <span className=" block text-lg md:text-2xl text-white/80">
            Hi! My name is,
          </span>

          <h1
            className="typing-line second mt-3 text-[3rem] md:text-[5rem] xl:text-[7.5rem] font-extrabold leading-[1.1]
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

          <div className="hero-line flex justify-center xl:justify-start gap-10 mt-10">
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

        {/* RIGHT (4 cols) */}
        <div className="xl:col-span-4 order-1 xl:order-2 relative flex justify-center items-center bg-transparent mt-10 xl:mt-0">
          {/* orbit rings */}
          <div className="absolute w-[280px] h-[280px]  rounded-full border border-violet-500/50" />
          <div className="absolute w-[360px] h-[360px]  rounded-full border border-pink-500/40" />
          <div className="absolute w-[440px] h-[440px] hidden sm:block rounded-full border border-purple-400/20" />

          {/* satellites */}
          <span className="absolute w-3 h-3 bg-white  rounded-full shadow-[0_0_10px_#fff] animate-[orbit1_8s_linear_infinite]" />
          <span className="absolute w-3 h-3 bg-pink-400  rounded-full shadow-[0_0_10px_#ec4899] animate-[orbit2_11s_linear_infinite]" />
          <span className="absolute w-3 h-3 bg-violet-400 hidden sm:block rounded-full shadow-[0_0_10px_#8b5cf6] animate-[orbit3_14s_linear_infinite]" />

          {/* glow aura */}
          <div className="absolute w-[220px] h-[220px] rounded-full bg-gradient-radial from-violet-500/25 to-transparent blur-3xl" />

          {/* profile image */}
          <img
            src="/imgs/logo.png"
            alt="profile"
            className="relative z-10 w-52 h-52 md:w-70 md:h-60 object-cover rounded-full "
          />
        </div>
      </div>
    </section>
  );
}
