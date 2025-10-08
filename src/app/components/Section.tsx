export default function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      id={id ?? title.toLowerCase()}
      className="reveal container mx-auto px-6 py-24"
    >
      <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
