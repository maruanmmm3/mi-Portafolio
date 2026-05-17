import certificadoPdf from '../assets/pdf/Uipath-jheanpier Maruan Aguilar Avila.pdf'
import certificadoImg from '../assets/img/CertificadoPrevio.png'
export default function CertificationsSection() {
    function CertificationCard() {
  return (
    <div className="bg-gradient-to-br from-cyan-500/10 to-slate-900 border border-cyan-400/20 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-2xl">
          🏆
        </div>

        <div>
          <h3 className="text-2xl font-bold">Master RPA UiPath</h3>
          <p className="text-slate-400">Certificación Udemy</p>
        </div>
      </div>

      <p className="text-slate-300 mt-6 leading-relaxed">
        Certificación enfocada en automatización de procesos empresariales con UiPath,
        desarrollo de robots, manejo de variables, REFramework, automatización web,
        escritorio y orquestación de procesos.
      </p>

      <a
        href={certificadoPdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 rounded-2xl text-black font-semibold"
      >
        Ver Certificado
      </a>
    </div>
  )
    }

function CertificatePreview() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 shadow-2xl">
      
      <img
        src={certificadoImg}
        alt="Certificado UiPath"
        className="rounded-2xl w-full object-cover hover:scale-[1.02] transition duration-300"
      />

    </div>
  )
}

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold mb-10">Certificaciones</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <CertificationCard />
        <CertificatePreview />
      </div>
    </section>
  )
}