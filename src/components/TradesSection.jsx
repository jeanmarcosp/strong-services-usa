import { ShieldCheck } from 'lucide-react'
import { business } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

// The four trades Strong is licensed for, each tagged with the license that covers it.
export default function TradesSection() {
  const { t } = useLang()
  const s = t.trades

  return (
    <section className="section border-b border-navy-100">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{s.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">{s.heading}</h2>
          <p className="mt-4 text-navy-600">{s.body}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {s.items.map(({ slug, title, summary, license, icon: Icon }) => (
            <div
              key={slug}
              className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition-colors group-hover:bg-green-600 group-hover:text-white">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy-900">{title}</h3>
              <p className="mb-5 mt-2 text-sm leading-relaxed text-navy-600">{summary}</p>
              <div className="mt-auto flex items-center gap-2 border-t border-navy-100 pt-4 text-xs">
                <ShieldCheck className="h-4 w-4 shrink-0 text-green-600" aria-hidden="true" />
                <span className="font-semibold uppercase tracking-wider text-navy-500">{t.licenseTypes[license]}</span>
                <span className="ml-auto font-semibold text-navy-900">{business.licenses[license]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
