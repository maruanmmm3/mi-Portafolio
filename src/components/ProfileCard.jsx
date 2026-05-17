export default function ProfileCard() {
  return (
    <div className="flex justify-center">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl w-full max-w-md">
        <div className="w-32 h-32 mx-auto rounded-full bg-cyan-500/20 border-4 border-cyan-400 flex items-center justify-center text-4xl font-bold text-cyan-300">
          JM
        </div>

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