export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-8">
        <div className="text-base font-semibold tracking-wide">Unreal Atelier</div>
        <div className="flex items-center gap-8 text-sm md:text-base">
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#services" className="transition-opacity duration-200 hover:opacity-70">
              Services
            </a>
            <a href="#cases" className="transition-opacity duration-200 hover:opacity-70">
              Cases
            </a>
            <a href="#faq" className="transition-opacity duration-200 hover:opacity-70">
              FAQ
            </a>
          </nav>
          <button
            type="button"
            className="border border-white/20 px-3 py-1 text-xs tracking-wide transition-opacity duration-200 hover:opacity-70 md:text-sm"
            aria-label="Language switcher"
          >
            EN | DE
          </button>
        </div>
      </div>
    </header>
  );
}
