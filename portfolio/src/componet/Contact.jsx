export default function Contact() {
  return (
    <section id="contact" className="px-4 pb-16 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-lg fade-up sm:p-10">
        <p className="text-sm font-semibold tracking-[0.2em] text-emerald-700">CONTACT</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Let's build something useful</h2>
        <p className="mt-3 text-slate-600">
          Open to full stack development roles, freelance work, and collaboration on practical products.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href="mailto:harikrishna@example.com"
            className="rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-center font-semibold text-blue-700 transition hover:bg-blue-100"
          >
            Email Me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-300 bg-white px-4 py-3 text-center font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
