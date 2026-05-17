export default function ExperienceSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-10">Experiencia Profesional</h2>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h3 className="text-2xl font-bold">Desarrollador RPA UiPath</h3>
            <p className="text-cyan-300 mt-1">Proyecto de Automatización Empresarial</p>
          </div>

          <span className="bg-cyan-500/10 text-cyan-300 px-4 py-2 rounded-xl border border-cyan-400/20 w-fit">
            3 años de experiencia
          </span>
        </div>

        <ul className="mt-6 text-slate-300 space-y-3 list-disc pl-6">
          <li>Desarrollo y mantenimiento de robots automatizados utilizando UiPath.</li>
          <li>Automatización de procesos SAP y plataformas web empresariales.</li>
          <li>Integración de correos automáticos mediante SMTP.</li>
          <li>Uso de UiPath Orchestrator para control y monitoreo de procesos.</li>
          <li>Automatización de extracción y procesamiento de datos.</li>
        </ul>
      </div>
    </section>
  )
}