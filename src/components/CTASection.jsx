import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Snowflake } from 'lucide-react'
import { business } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

export default function CTASection({ heading, body }) {
  const { t } = useLang()
  const cta = t.cta

  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-700 via-green-600 to-green-700 px-8 py-14 text-white sm:px-14">
          <div className="airflow absolute inset-0" aria-hidden="true" />
          <Snowflake
            className="absolute -right-10 -top-10 h-64 w-64 text-white/10"
            strokeWidth={1}
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold sm:text-4xl">{heading ?? cta.heading}</h2>
              <p className="mt-3 text-green-50/90">{body ?? cta.body}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-green-100">
                {cta.callToday}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={business.phoneHref} className="btn bg-white text-navy-900 hover:bg-navy-50">
                <Phone className="h-4 w-4" />
                {business.phone}
              </a>
              <Link to="/contact" className="btn border border-white/40 text-white hover:bg-white/10">
                {cta.request}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
