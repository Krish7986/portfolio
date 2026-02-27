import { useState } from "react";
import { motion as Motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" },
  }),
};

export default function Edu() {
  const [activeIndex, setActiveIndex] = useState(0);

  const educationList = [
    {
      degree: "Bachelors of Technology (CSE - AI & ML)",
      year: "2021 - 2025",
      institute: "Kakinada Institute of Engineering and Technology",
      score: "CGPA: 7.5 / 10",
    },
    {
      degree: "Intermediate (MPC)",
      year: "2019 - 2021",
      institute: "Sri Chaitanya Junior College",
      score: "CGPA: 7.5 / 10",
    },
    {
      degree: "SSC (10th Class)",
      year: "2018 - 2019",
      institute: "Srujana English Medium High School",
      score: "CGPA: 8.5 / 10",
    },
  ];

  return (
    <section id="education" className="section-shell">
      <Motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        custom={0}
        className="section-wrap"
      >
        <p className="section-kicker">Education</p>
        <h2 className="section-title">Academic Journey</h2>
        <p className="section-copy">
          Structured learning in core engineering, mathematics, and applied software development.
        </p>

        <div className="relative mt-10 grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
          <Motion.div
            className="pointer-events-none absolute -right-5 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-blue-200/45 blur-3xl"
            animate={{ y: [0, -10, 0], opacity: [0.35, 0.5, 0.35] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <Motion.aside
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="surface-card h-fit rounded-3xl border border-slate-200 bg-gradient-to-b from-blue-50/80 to-white p-6 sm:p-8 lg:sticky lg:top-24"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Profile</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">Foundation First</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Strong base in Computer Science, practical development, and problem-solving through real-world project
              implementations.
            </p>

            <div className="mt-6 space-y-3">
              {educationList.map((item, index) => (
                <button
                  key={`${item.degree}-tab`}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full rounded-xl border px-3 py-2 text-left text-sm transition ${
                    activeIndex === index
                      ? "border-blue-300 bg-blue-50 text-blue-800"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-200"
                  }`}
                >
                  <span className="font-semibold">{item.year}</span>
                  <span className="ml-2">{item.degree}</span>
                </button>
              ))}
            </div>
          </Motion.aside>

          <div className="space-y-4">
            {educationList.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <Motion.article
                  key={item.degree}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`rounded-2xl border bg-white p-5 transition-all duration-300 sm:p-6 ${
                    isActive
                      ? "border-blue-300 shadow-[0_14px_34px_rgba(59,130,246,0.16)]"
                      : "border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:border-blue-200"
                  }`}
                >
                  <div className="grid gap-4 sm:grid-cols-[auto,1fr] sm:items-start">
                    <div
                      className={`rounded-xl px-3 py-2 text-center text-sm font-semibold ${
                        isActive ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {item.year}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 sm:text-xl">{item.degree}</h4>
                      <p className="mt-1 text-slate-700">{item.institute}</p>
                      <p className={`mt-2 text-xs font-bold uppercase tracking-[0.14em] ${isActive ? "text-blue-700" : "text-slate-600"}`}>
                        {item.score}
                      </p>
                    </div>
                  </div>
                </Motion.article>
              );
            })}
          </div>
        </div>
      </Motion.div>
    </section>
  );
}
