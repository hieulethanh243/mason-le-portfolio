/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import useSWR from "swr";
import LoadingDots from "./common/Loading";
import TechCard from "./Stack/TechCard";
import SectionTitle from "./SectionTitle";

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { data, error, isLoading } = useSWR("/api/tech-stack", (url) =>
    fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !data || !sectionRef.current) return;

    if (typeof window === "undefined") return;

    const rafId = requestAnimationFrame(() => {
      if (!sectionRef.current) return;

      const items = sectionRef.current.querySelectorAll(".stack-item");
      if (items && items.length > 0) {
        gsap.fromTo(
          Array.from(items),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
          }
        );
      }
    });

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [isMounted, data]);

  return (
    <section
      ref={sectionRef}
      id="stack"
      className=" bg-black text-white overflow-hidden"
    >
      <SectionTitle title="Tech Stack" />
      <div className="container mx-auto px-6 mt-[50px] xl:mt-[200px]">
        {isLoading && <LoadingDots />}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-6">
          {error && <p className="text-red-500">Failed to load tech stack.</p>}
          {data &&
            data?.map((item: any, index: number) => (
              <TechCard
                key={item.id || index}
                name={item.title}
                type={item.type}
                iconUrl={item.icon}
                delay={index * 0.1}
                url={item.url}
              />
            ))}
        </div>
      </div>
      <div className="mt-[50px] xl:mt-[200px]">
        <SectionTitle title="Tech Stack" end />
      </div>
    </section>
  );
}
