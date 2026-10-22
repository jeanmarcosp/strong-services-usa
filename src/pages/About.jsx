import { CheckCircle2, Snowflake } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Glow from '../components/Glow'
import YgreneCallout from '../components/YgreneCallout'
import CTASection from '../components/CTASection'
import { business } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

function CheckList({ heading, intro, items, note, icon: Icon = CheckCircle2 }) {
  return (
    <div className="rounded-3xl border border-navy-100 bg-white p-8">
      <h3 className="text-xl font-extrabold text-navy-900">{heading}</h3>
      {intro && <p className="mt-2 text-sm text-navy-500">{intro}</p>}
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-navy-700">
            <Icon className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      {note && <p className="mt-5 text-sm font-semibold text-navy-600">{note}</p>}
    </div>
  )
}

export default function About() {
  const { t } = useLang()
  const about = t.about

  return (
    <>
      <PageHeader eyebrow={about.eyebrow} title={about.heading} subtitle={about.lead} image="/images/unit-sunset.jpg" />

      <section className="section">
        <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            {about.body.map((p) => (
              <p key={p} className="text-lg text-navy-600">
                {p}
              </p>
            ))}
            {t.intro.body.map((p) => (
              <p key={p} className="text-navy-600">
                {p}
              </p>
            ))}
          </div>
          <img
            src="/images/technician.jpg"
            alt={t.assistance.photoAlt}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Values */}
      <section className="section relative overflow-hidden bg-navy-950 text-white">
        <Glow />
        <div className="container relative">
          <div className="max-w-2xl">
            <span className="eyebrow text-green-400">{about.valuesEyebrow}</span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{about.valuesHeading}</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v, i) => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <span className="font-display text-sm font-bold text-green-400">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services + specialists */}
      <section className="section bg-navy-50">
        <div className="container grid grid-cols-1 gap-6 lg:grid-cols-2">
          <CheckList
            heading={about.servicesHeading}
            intro={about.servicesIntro}
            items={about.services}
            note={about.servicesMore}
          />
          <CheckList heading={about.specialistsHeading} items={about.specialists} icon={Snowflake} />
        </div>
        <div className="container mt-6">
          <YgreneCallout heading={about.ygrene.heading} body={about.ygrene.body} badge={t.ygrene.badge} />
        </div>
      </section>

      {/* Credentials strip */}
      <section className="border-b border-navy-100 bg-white">
        <div className="container grid grid-cols-1 gap-8 py-12 text-center sm:grid-cols-3">
          <div>
            <p className="font-display text-4xl font-extrabold text-navy-800">{business.yearsInBusiness}+</p>
            <p className="mt-1 text-sm font-medium uppercase tracking-widest text-navy-500">{about.credentials.years}</p>
          </div>
          <div>
            <p className="font-display text-4xl font-extrabold text-navy-800">{business.license}</p>
            <p className="mt-1 text-sm font-medium uppercase tracking-widest text-navy-500">{about.credentials.license}</p>
          </div>
          <div>
            <p className="font-display text-4xl font-extrabold text-navy-800">{about.credentials.areaValue}</p>
            <p className="mt-1 text-sm font-medium uppercase tracking-widest text-navy-500">
              {about.credentials.area}
            </p>
            <p className="mt-1 text-xs text-navy-400">{t.serviceArea}</p>
          </div>
        </div>
      </section>

      <CTASection heading={about.cta.heading} body={about.cta.body} />
    </>
  )
}
