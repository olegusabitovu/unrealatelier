export function VideoSection() {
  return (
    <section className="px-6 py-[40px] md:px-8 md:py-[80px]">
      <div className="mx-auto w-full max-w-[1200px]">
        <h2 className="text-3xl font-bold md:text-4xl">Showreel</h2>
        <video
          controls
          preload="none"
          src="/video/showreel.mp4"
          className="mt-8 w-full rounded-[12px] border border-white/10 bg-black"
        >
          <track kind="captions" />
        </video>
      </div>
    </section>
  );
}
