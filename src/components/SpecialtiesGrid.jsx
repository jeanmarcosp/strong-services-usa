import { useLang } from '../i18n/LanguageContext'
import Glow from './Glow'

export default function SpecialtiesGrid() {
  const { t } = useLang()
  const s = t.specialties

  return (
    <section className="section relative overflow-hidden bg-navy-950 text-white">
      <Glow />
      <div className="container relative">
        <div className="max-w-2xl">
          <span className="eyebrow text-green-400">{s.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{s.heading}</h2>
          <p className="mt-4 text-navy-200">{s.body}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map(({ slug, title, icon: Icon }) => (
            <div
              key={slug}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-green-400/40 hover:bg-white/[0.07]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-semibold leading-snug">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
