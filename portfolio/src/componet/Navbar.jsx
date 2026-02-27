import { useCallback, useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    for (let i = NAV_ITEMS.length - 1; i >= 0; i -= 1) {
      const id = NAV_ITEMS[i].href.replace("#", "");
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        setActiveSection(id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (href) => {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          className="cursor-pointer border-none bg-transparent text-xl font-bold tracking-wide text-blue-600 sm:text-2xl"
          onClick={() => scrollTo("#home")}
        >
          Hari<span className="text-slate-900">Krishna</span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className={`nav-link bg-transparent border-none ${
                  activeSection === link.href.replace("#", "") ? "active" : ""
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href="/HARI_FULLSTACK.pdf" download className="btn-secondary text-sm py-2 px-4">
            Resume
          </a>
          <button onClick={() => scrollTo("#contact")} className="btn-primary text-sm py-2 px-4">
            Hire Me
          </button>
        </div>

        <button
          className="flex cursor-pointer flex-col gap-1.5 border-none bg-transparent p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block h-0.5 w-6 bg-slate-900 transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`block h-0.5 w-6 bg-slate-900 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-slate-900 transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-b border-slate-200 bg-white/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {open && (
          <ul className="flex flex-col gap-1 px-6 py-4 text-slate-700">
            {NAV_ITEMS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`w-full rounded-md px-2 py-3 text-left text-base font-medium transition ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <div className="mt-3 flex gap-3 border-t border-slate-200 pt-3">
              <a href="/HARI_FULLSTACK.pdf" download className="btn-secondary flex-1 justify-center py-2 text-sm">
                Resume
              </a>
              <button onClick={() => scrollTo("#contact")} className="btn-primary flex-1 justify-center py-2 text-sm">
                Hire Me
              </button>
            </div>
          </ul>
        )}
      </div>
    </header>
  );
}
