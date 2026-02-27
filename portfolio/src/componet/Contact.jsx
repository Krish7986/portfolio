
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    // Handle form submission logic here
    setTimeout(() => {
      setStatus("Submit");
    }, 2000);
  };

  return (
    <section id="contact" className="section-shell">
      <div className="section-wrap">
        <div className="text-center">
          <p className="fade-up section-kicker">Contact</p>
          <h2 className="fade-up delay-1 section-title">Let's Build Something Useful</h2>
          <p className="fade-up delay-2 section-copy mx-auto">
            Open to full stack roles, freelance projects, and product collaborations.
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="fade-up delay-2">
            <div className="space-y-4">
              <a href="mailto:harichinta282@gmail.com" className="surface-card flex items-center gap-4 p-4 transition hover:-translate-y-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="font-semibold text-slate-800">harichinta282@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/harikrishna282/" target="_blank" rel="noreferrer" className="surface-card flex items-center gap-4 p-4 transition hover:-translate-y-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span className="font-semibold text-slate-800">LinkedIn</span>
              </a>
              <a href="https://github.com/Krish7986" target="_blank" rel="noreferrer" className="surface-card flex items-center gap-4 p-4 transition hover:-translate-y-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span className="font-semibold text-slate-800">GitHub</span>
              </a>
              <a href="https://wa.me/919502242579" target="_blank" rel="noreferrer" className="surface-card flex items-center gap-4 p-4 transition hover:-translate-y-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.849 6.081l-1.214 4.425 4.522-1.182z M12 5.733c2.14 0 4.13.826 5.631 2.328 1.501 1.502 2.328 3.49 2.326 5.631-.002 4.499-3.662 8.162-8.162 8.162-1.844 0-3.546-.623-4.91-1.698l-.359-.214-3.585.942.959-3.504-.233-.372c-1.144-1.83-1.789-3.92-1.787-6.099.002-4.499 3.662-8.162 8.162-8.162z"/></svg>
                <span className="font-semibold text-slate-800">WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="fade-up delay-2 surface-card p-6">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Your Name" className="form-input" required />
                <input type="email" placeholder="Your Email" className="form-input" required />
              </div>
              <textarea placeholder="Your Message" className="form-input mt-4 h-32 resize-none" required />
              <button type="submit" className="btn-primary mt-4 w-full justify-center px-6 py-3 text-sm">
                {status}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
