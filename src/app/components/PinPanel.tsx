"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function PinPanel() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>(".pin-step");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=1200",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      steps.forEach((el, i) => {
        tl.fromTo(
          el,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          i * 0.5 // delay cho từng khối, có thể chỉnh nhỏ hơn để chuyển nhanh hơn
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-primary/10">
      <div className="container mx-auto px-6 py-24 min-h-[100vh] grid place-items-center">
        <div className="max-w-2xl space-y-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            What I do
          </h2>
          <div className="pin-step rounded-2xl border p-6 bg-white/10 text-white backdrop-blur">
            Design delightful UI/UX.
          </div>
          <div className="pin-step rounded-2xl border p-6 bg-white/10 text-white backdrop-blur">
            Build with Next.js + NestJS.
          </div>
          <div className="pin-step rounded-2xl border p-6 bg-white/10 text-white backdrop-blur">
            Animate with GSAP ScrollTrigger.
          </div>
        </div>
      </div>
    </section>
  );
}
