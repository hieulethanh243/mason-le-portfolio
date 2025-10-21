import Hero from "./components/Hero";
import Section from "./components/Section";
import PinPanel from "./components/PinPanel";
import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/Stack";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <TechStack />

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
