import { useTypewriter, Cursor } from "react-simple-typewriter";

const roles = ["Full Stack Developer", "Frontend Developer", "Backend Developer"];
export default function Body() {
  const [typedText] = useTypewriter({
    words: roles,
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <main>
      <section
        id="home"
        className="relative min-h-screen w-full overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pt-32 "
      >
        <div className="hero-glow pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full bg-emerald-200/60 blur-3xl " />
        <div className="hero-glow pointer-events-none absolute -right-20 bottom-24 h-60 w-60 rounded-full bg-sky-200/50 blur-3xl" />

        <h1 className="pointer-events-none absolute -left-10 top-32 hidden select-none font-extrabold tracking-wide text-slate-200 sm:block sm:text-[90px] md:text-[130px] lg:text-[180px]">
          KRISHNA
        </h1>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          <div className="w-full md:max-w-3xl fade-up">
            <div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-5">
              <span className="text-sm font-semibold tracking-[0.22em] text-slate-700 sm:text-xl">
                HELLO
              </span>
              <div className="h-0.5 w-14 bg-slate-900 sm:w-28"></div>
            </div>

            <h1 className="mb-2 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl md:text-6xl">
              I'm HARI KRISHNA
            </h1>

            <h2 className="text-lg font-semibold tracking-wide text-emerald-700 sm:text-xl lg:text-3xl">
              {typedText}
              <Cursor cursorStyle="|" />
            </h2>

            <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
              I build clean, scalable web applications with modern frontend and
              backend stacks.
            </p>

            <div className="fade-up delay-1 mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#contact"
                className="inline-flex w-full justify-center rounded-md border-2 border-transparent bg-blue-600 px-6 py-3 text-white transition active:scale-[0.99] sm:w-auto sm:hover:border-blue-600 sm:hover:bg-white sm:hover:text-slate-900"
              >
                HIRE ME
              </a>

              <a
                href="/HARI_FULLSTACK.pdf"
                download="Hari_Krishna_CV.pdf"
                className="inline-flex w-full justify-center rounded-md border-2 border-blue-600 px-6 py-3 text-blue-700 transition active:scale-[0.99] sm:w-auto sm:hover:border-transparent sm:hover:bg-blue-600 sm:hover:text-white"
              >
                GET CV
              </a>
            </div>
          </div>

          <img
            src="img1.png"
            alt="Hari Krishna portrait"
            className="fade-up delay-2 mx-auto hidden w-full md:ml-auto md:block md:max-w-[380px] lg:max-w-[460px]"
          />
        </div>
      </section>  
    </main>
  );
}
