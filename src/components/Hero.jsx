import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Clock } from 'lucide-react'
import { business } from '../data/content'
import { useLang } from '../i18n/LanguageContext'
import Glow from './Glow'

export default function Hero() {
  const { t } = useLang()
  const hero = t.hero

  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <Glow />

      <div className="container relative grid grid-cols-1 items-center gap-14 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="eyebrow text-green-400">{hero.eyebrow}</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
            {hero.headlineLead}{' '}
            <span className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
              {hero.headlineAccent}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy-200">{hero.body}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to={hero.primaryCta.to} className="btn-primary">
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={business.phoneHref} className="btn-outline">
              <Phone className="h-4 w-4" />
              {business.phone}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src="/images/hero.jpg"
              alt={hero.photoAlt}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-white p-5 shadow-xl sm:block">
            <p className="font-display text-3xl font-extrabold text-navy-800">{business.yearsInBusiness}+</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-500">{hero.yearsLabel}</p>
          </div>
          <div className="absolute -top-4 right-4 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {hero.emergency}
          </div>
        </div>
      </div>
    </section>
  )
}
