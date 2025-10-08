import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import Section from "./components/Section";
import PinPanel from "./components/PinPanel";

export default function Page() {
  return (
    <>
      <Hero />
      <Section id="work" title="Selected Work">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">UI Template Hub</h3>
            <p className="mt-2 text-slate-600">
              Free templates, components, live previews.
            </p>
          </article>
          <article className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">Camera-Market</h3>
            <p className="mt-2 text-slate-600">
              Microservices e-commerce (NestJS, RabbitMQ).
            </p>
          </article>
        </div>
      </Section>
      <PinPanel />
      <Section title="Contact">
        <a
          href="mailto:contact@example.com"
          className="inline-block rounded-2xl bg-black px-5 py-3 text-white"
        >
          Say hello
        </a>
      </Section>
    </>
  );
}
