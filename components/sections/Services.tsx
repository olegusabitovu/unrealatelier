const services = [
  {
    title: "Virtual Production",
    description: "End-to-end LED stage workflows, real-time scene optimization, and on-set technical supervision.",
  },
  {
    title: "PreViz",
    description: "Clear visual planning for camera movement, blocking, and creative direction before production begins.",
  },
  {
    title: "ArchViz",
    description: "Photoreal architectural experiences with cinematic lighting and interactive presentation quality.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-[40px] md:px-8 md:py-[80px]">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-bold md:text-4xl">Services</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-opacity duration-200 hover:opacity-80"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-white/70">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
