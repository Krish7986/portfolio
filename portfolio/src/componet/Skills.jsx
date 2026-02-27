import { useEffect, useMemo, useRef, useState } from "react";

const skillData = [
  { name: "Python", level: 88, color: "from-yellow-400 to-amber-500" },
  { name: "JavaScript", level: 84, color: "from-orange-400 to-red-500" },
  { name: "HTML", level: 90, color: "from-red-400 to-orange-500" },
  { name: "CSS", level: 86, color: "from-blue-400 to-cyan-500" },
  { name: "React.js", level: 82, color: "from-cyan-400 to-blue-500" },
  { name: "Django", level: 85, color: "from-emerald-400 to-green-500" },
  { name: "MySQL", level: 80, color: "from-sky-400 to-indigo-500" },
  { name: "REST APIs", level: 79, color: "from-violet-400 to-purple-500" },
  { name: "Git & GitHub", level: 83, color: "from-slate-500 to-slate-700" },
];

export function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(
    skillData.map(() => 0)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const targets = useMemo(() => skillData.map((skill) => skill.level), []);

  useEffect(() => {
    if (!visible) return;

    const duration = 1300;
    const startTime = performance.now();
    let frameId;

    const tick = (now) => {
      const elapsed = now - startTime;
      const ratio = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - ratio, 3);

      setProgress(targets.map((value) => Math.round(value * eased)));

      if (ratio < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [targets, visible]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-14 text-center sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute -left-24 top-14 h-44 w-44 rounded-full bg-cyan-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-48 w-48 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="fade-up mx-auto max-w-4xl rounded-3xl border border-slate-200/60 bg-white/90 p-5 shadow-xl backdrop-blur sm:p-7">
        <div className="mb-7">
          <p className="text-sm font-semibold tracking-[0.2em] text-emerald-700">
            TECH STACK
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Skills & Language Strength
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Based on your resume: programming, web technologies, database, API
            development, and version control proficiency.
          </p>
        </div>

        <div className="space-y-4">
          {skillData.map((skill, index) => (
            <div key={skill.name}>
              <div className="mb-1.5 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-800 sm:text-base">
                  {skill.name}
                </h3>
                <span className="text-xs font-bold text-slate-700 sm:text-sm">
                  {progress[index]}%
                </span>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-[0_0_16px_rgba(15,23,42,0.2)] transition-all duration-700`}
                  style={{
                    width: `${progress[index]}%`,
                    transitionDelay: `${index * 60}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
