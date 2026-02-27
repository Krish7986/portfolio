import { useState } from "react";

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
    <section id="education" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="fade-up text-sm font-semibold tracking-[0.2em] text-emerald-700">EDUCATION</p>
        <h2 className="fade-up delay-1 mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Academic Background
        </h2>

        <div className="relative mt-8">
          <div className="absolute bottom-0 left-[11px] top-0 w-1 rounded-full bg-slate-200" />
          <div
            className="absolute left-[11px] top-0 w-1 rounded-full bg-gradient-to-b from-emerald-500 to-cyan-500 transition-all duration-500"
            style={{ height: `${((activeIndex + 1) / educationList.length) * 100}%` }}
          />

          {educationList.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <article
                key={item.degree}
                className="fade-up group relative mb-5 pl-9"
                style={{ animationDelay: `${index * 110}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                tabIndex={0}
              >
                <span
                  className={`absolute left-0 top-7 h-6 w-6 rounded-full border-4 transition-all duration-300 ${
                    isActive
                      ? "scale-110 border-emerald-500 bg-emerald-200"
                      : "border-slate-300 bg-white group-hover:border-cyan-400"
                  }`}
                />

                <div
                  className={`rounded-2xl border p-5 shadow-md transition-all duration-300 sm:p-6 ${
                    isActive
                      ? "border-emerald-300 bg-emerald-50/70 shadow-emerald-100"
                      : "border-slate-200 bg-white hover:border-cyan-300"
                  }`}
                >
                  <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-start">
                    <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{item.degree}</h3>
                    <span
                      className={`w-fit rounded-full px-3 py-1 text-sm font-semibold transition-colors ${
                        isActive ? "bg-emerald-200 text-emerald-900" : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-2 text-slate-700">{item.institute}</p>
                  <p className={`mt-1 font-semibold ${isActive ? "text-emerald-700" : "text-slate-700"}`}>
                    {item.score}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
