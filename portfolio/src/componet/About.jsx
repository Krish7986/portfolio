export function About() {
  return (
    <section id="about" className="px-4 pb-8 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 sm:grid-cols-2 lg:gap-12">
        <div className="fade-up">
          <img
            src="about-us.png"
            alt="About Hari Krishna"
            className="fade-up delay-2 mx-auto hidden md:block w-full md:max-w-[380px] lg:mx-0 lg:max-w-[460px]"
          />
        </div>

        <div className="fade-up delay-1 rounded-2xl bg-white p-6 shadow-[5px_5px_18px_rgba(15,23,42,0.12)] sm:p-8">
          <p className="text-sm font-semibold tracking-[0.2em] text-emerald-700">ABOUT</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
            Hari Krishna
          </h2>
          <h3 className="mt-1 text-lg font-semibold text-slate-700 sm:text-xl">Let's Introduce About Myself</h3>
          <p className="mt-4 text-base font-medium leading-7 text-slate-600 sm:text-lg">
            I am an entry-level Full Stack Developer with strong foundations in Python and Django for backend
            development, React for building responsive user interfaces, and MySQL for data management. I enjoy
            shipping clean, practical applications with a focus on performance and usability.
          </p>
        </div>
      </div>
    </section>
  );
}
