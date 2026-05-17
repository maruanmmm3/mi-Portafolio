export default function SkillsSection() {

  const skills = [
    'UiPath Studio',
    'UiPath Orchestrator',
    'SAP Automation',
    'Web Scraping',
    'Power Automate',
    'SMTP & Emails',
    'Excel Automation',
    'REST APIs',
  ]

  function SkillCard({ title }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition">
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  )
    }

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold mb-10">Tecnologías y Habilidades</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill} title={skill} />
        ))}
      </div>
    </section>
  )
}