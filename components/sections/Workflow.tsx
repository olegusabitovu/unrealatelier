const steps = [
  {
    title: "01 Discovery",
    text: "We align on goals, scope, and technical requirements.",
  },
  {
    title: "02 Production",
    text: "Our team builds and refines assets for real-time environments.",
  },
  {
    title: "03 Delivery",
    text: "You receive production-ready outputs and launch support.",
  },
];

export function Workflow() {
  return (
    <section className="px-6 py-[40px] md:px-8 md:py-[80px]">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-bold md:text-4xl">Workflow</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="border-t border-white/20 pt-5">
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-white/70">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
