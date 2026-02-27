import { useEffect, useRef, useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FiCloud, FiCode, FiTool } from "react-icons/fi";
import { SiDjango, SiExpress, SiJavascript, SiMongodb, SiMysql, SiPostgresql, SiPostman, SiTailwindcss, SiTypescript } from "react-icons/si";

const stackItems = [
  { name: "Python", icon: FaPython, color: "text-yellow-300" },
  { name: "Django", icon: SiDjango, color: "text-emerald-400" },
  { name: "HTML", icon: FaHtml5, color: "text-orange-400" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
  { name: "React", icon: FaReact, color: "text-cyan-300" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-300" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-300" },
  { name: "Git & GitHub", icon: FaGitAlt, color: "text-orange-300" },
  { name: "REST APIs", icon: FaDatabase, color: "text-violet-300" },
  { name: "Docker", icon: FaDocker, color: "text-cyan-300" },
  { name: "Postman", icon: SiPostman, color: "text-orange-300" },
];

const categories = [
  {
    title: "Programming",
    icon: FiCode,
    items: [
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 84 }

    ],
  },
  {
    title: "Data & AI/ML",
    icon: FaDatabase,
    items: [
      { name: "SQL / MySQL", level: 82 },
      { name: "Machine Learning", level: 76 },
      { name: "NLP / Transformers", level: 74 },
    ],
  },
  {
    title: "Tools & Cloud",
    icon: FiCloud,
    items: [
      { name: "Git / GitHub", level: 83 },
      { name: "Docker", level: 70 },
      { name: "Postman", level: 80 },
      { name: "Vercel / Netlify", level: 84 },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" },
  }),
};

export function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-shell space-y-8">
      <div className="section-wrap">
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#030712] px-5 py-12 text-white shadow-[0_20px_60px_rgba(2,6,23,0.55)] sm:px-8"
        >
          <Motion.div
            className="pointer-events-none absolute -top-10 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-blue-500/25 blur-3xl"
            animate={{ x: [-24, 24, -24], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative text-center">
            <p className="section-kicker !text-blue-300">Better Than Yesterday.</p>
            <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">My Tech Stack</h2>
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-[40%] border border-amber-300/70 blur-[1px]" />
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {stackItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Motion.span
                  key={item.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-400/35 bg-slate-900/85 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-blue-300/70"
                >
                  <Icon className={`text-lg ${item.color}`} />
                  {item.name}
                </Motion.span>
              );
            })}
          </div>
        </Motion.div>
      </div>

      <Motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        custom={0.06}
        className="section-wrap rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_44px_rgba(15,23,42,0.08)] sm:p-8"
      >
        <div className="mb-8">
          <p className="section-kicker">Skills Breakdown</p>
          <h3 className="section-title">Categorized Proficiency</h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, cardIndex) => {
            const CategoryIcon = category.icon || FiTool;
            return (
              <Motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: cardIndex * 0.08 }}
                className="rounded-2xl border border-slate-200 p-4"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-blue-600">
                    <CategoryIcon />
                  </span>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">{category.title}</h4>
                </div>

                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <p className="text-sm font-medium text-slate-800">{item.name}</p>
                        <p className="text-sm font-semibold text-blue-700">{item.level}%</p>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-200">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-700"
                          style={{ width: visible ? `${item.level}%` : "0%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Motion.div>
            );
          })}
        </div>
      </Motion.div>
    </section>
  );
}
