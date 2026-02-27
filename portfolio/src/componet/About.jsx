export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-wrap grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className="fade-up surface-card p-3 hidden md:block">
          <img
            src="about-us.png"
            alt="About Hari Krishna"
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div className="fade-up delay-1">
          <p className="section-kicker">About</p>
          <h2 className="section-title">Developer With Product Mindset</h2>
          <p className="section-copy text-base leading-7 sm:text-lg">
            I am an entry-level Full Stack Developer with strong foundations in Python and Django for backend
            development, React for building responsive user interfaces, and MySQL for data management. I enjoy
            shipping clean, practical applications with a focus on performance and usability.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="surface-card px-4 py-3">
              <p className="text-xs font-semibold tracking-[0.14em] text-blue-700">LOCATION</p>
              <p className="mt-1 font-semibold text-slate-900">Andhra Pradesh, India</p>
            </div>
            <div className="surface-card px-4 py-3">
              <p className="text-xs font-semibold tracking-[0.14em] text-blue-700">SPECIALITY</p>
              <p className="mt-1 font-semibold text-slate-900">Python + Django + Reactjs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
