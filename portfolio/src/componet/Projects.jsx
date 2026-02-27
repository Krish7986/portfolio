import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Sentiment Analysis Using BERT and Transformers",
    stack: ["Python", "BERT", "Transformers", "NLP", "Gradio", "Scikit-learn"],
    highlights: [
      "Built a sentiment classifier with pre-trained BERT and fine-tuning.",
      "Classified positive, negative, and neutral sentiment.",
      "Achieved 92% F1-score and 91% precision.",
      "Created a Gradio UI for real-time sentiment prediction.",
    ],
    theme: "from-emerald-400/30 to-cyan-400/30",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Gym Management System",
    stack: ["Django", "MySQL", "HTML", "CSS", "JavaScript", "GitHub"],
    highlights: [
      "Implemented authentication and role-based access for Admin, Trainer, and Member.",
      "Built CRUD flows for members, trainers, and plans using Django ORM.",
      "Designed an admin dashboard for analytics and operations.",
      "Developed responsive UI with Django templates and modern frontend styling.",
    ],
    theme: "from-orange-400/30 to-pink-400/30",
    liveUrl: "https://gym-managment-system-djnango.onrender.com",
    sourceUrl: "https://github.com/Krish7986/Gym_managment_system_djnango.git",
  },
  {
    title: "Event Management System",
    stack: ["HTML","CSS","JAVASCRIPT", "GitHub"],
    highlights: [
      "Built event creation and booking flows for users and organizers.",
      "Added role-based access for admin, organizer, and attendee dashboards.",
      "Integrated ticket availability tracking and registration management.",
      "Implemented responsive pages for event listing, details, and schedules.",
    ],
    theme: "from-sky-400/30 to-indigo-400/30",
    liveUrl: "https://eventmanagementbyhari.vercel.app/",
    sourceUrl: "https://github.com/Krish7986/New-folder--2-.git",
  },
];

export function Projects() {
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
    <section id="projects" ref={sectionRef} className="section-shell">
      <div className="section-wrap">
        <p className="fade-up section-kicker">Projects</p>
        <h2 className="fade-up delay-1 section-title">Featured Work</h2>
        <p className="fade-up delay-2 section-copy">Real projects focused on backend quality, clean UI, and practical impact.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group surface-card relative overflow-hidden p-6 transition duration-500 hover:-translate-y-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.theme} opacity-40 transition group-hover:opacity-60`}
              />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="tech-chip"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-700" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 transition hover:bg-blue-100"
                  >
                    Live
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
