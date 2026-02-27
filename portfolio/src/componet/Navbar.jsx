import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur fade-down">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold tracking-wide text-emerald-500 sm:text-2xl">
          Hari<span className="text-slate-900">Krishna</span>
        </h1>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition hover:text-emerald-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-md bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 md:block"
        >
          Hire Me
        </a>

        <button
          className="text-2xl text-slate-900 transition hover:text-emerald-600 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {open && (
          <ul className="flex flex-col items-center gap-5 px-4 py-6 text-slate-700">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base font-medium transition hover:text-emerald-500"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-md bg-emerald-500 px-6 py-2 font-semibold text-slate-950"
            >
              Hire Me
            </a>
          </ul>
        )}
      </div>
    </nav>
  );
}
