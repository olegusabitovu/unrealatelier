export function Contact() {
  return (
    <section className="px-6 py-[40px] md:px-8 md:py-[80px]">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-bold md:text-4xl">Contact</h2>
        <form className="mt-8 grid gap-4 md:max-w-2xl">
          <input
            type="text"
            name="company"
            placeholder="Company"
            className="rounded-md border border-white/20 bg-black px-4 py-3 text-white placeholder:text-white/50 outline-none transition-colors focus:border-white/50"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="rounded-md border border-white/20 bg-black px-4 py-3 text-white placeholder:text-white/50 outline-none transition-colors focus:border-white/50"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="rounded-md border border-white/20 bg-black px-4 py-3 text-white placeholder:text-white/50 outline-none transition-colors focus:border-white/50"
          />
          <button
            type="submit"
            className="mt-2 inline-flex w-fit items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity duration-200 hover:opacity-85"
          >
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
}
