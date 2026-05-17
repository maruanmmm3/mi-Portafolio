export default function ContactSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-cyan-500/10 to-slate-900 border border-cyan-400/20 rounded-3xl p-10 text-center">
        <h2 className="text-4xl font-bold">¿Buscas automatizar procesos?</h2>

        <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-lg">
          Estoy disponible para proyectos de automatización RPA con UiPath, integración de sistemas,
          scraping web y optimización de procesos empresariales.
        </p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
         <a
            href="https://www.linkedin.com/in/jheanpier-maruan-aguilar-avila-28a6b91a4/?skipRedirect=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-2xl font-semibold text-black"
          >
          LinkedIn
          </a>

          <a
            href="https://github.com/maruanmmm3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-slate-700 hover:border-cyan-400 transition px-8 py-4 rounded-2xl font-semibold"
          >
            GitHub
          </a>
             
        </div>
      </div>
    </section>
  )
}