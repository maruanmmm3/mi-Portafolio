import miFoto from '../assets/img/mifoto.jpg';
export default function HeroSection() {

    function ProfileCard() {
  return (
    <div className="flex justify-center">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl w-full max-w-md">
       <img
          src={miFoto}
          alt="Mi Foto"
          className="w-32 h-32 mx-auto rounded-full border-4 border-cyan-400 object-cover"
        />

        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold">UiPath RPA Developer</h2>
          <p className="text-slate-400 mt-2">
            Especializado en automatización de procesos empresariales.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <StatCard number="3+" label="Años de experiencia" />
          <StatCard number="20+" label="Automatizaciones" />
        </div>
      </div>
    </div>
  )
    }
    function StatCard({ number, label }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-4 text-center">
      <h3 className="text-2xl font-bold text-cyan-300">{number}</h3>
      <p className="text-slate-400 text-sm mt-1">{label}</p>
    </div>
  )
}

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="bg-cyan-500/20 text-cyan-300 px-4 py-1 rounded-full text-sm border border-cyan-400/20">
            RPA Developer • UiPath Specialist
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Jheanpier Maruan Aguilar
          </h1>

          <p className="text-slate-300 mt-6 text-lg leading-relaxed">
            Profesional en automatización RPA con experiencia en desarrollo de robots utilizando
            UiPath, automatización de procesos empresariales, integración con SAP, scraping web,
            automatización de correos y manejo de Orchestrator.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
          <a
            href="mailto:maruan123trabajo@gmail.com"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-2xl font-semibold text-black shadow-lg shadow-cyan-500/20"
          >
            Contactarme
          </a>

            {/* <button className="border border-slate-700 hover:border-cyan-400 transition px-6 py-3 rounded-2xl font-semibold">
              Ver Proyectos
            </button> */}
          </div>
        </div>

        <ProfileCard />
      </div>
    </section>
  )
}


