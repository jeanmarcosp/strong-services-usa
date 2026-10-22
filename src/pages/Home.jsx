import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import ServiceCard from '../components/ServiceCard'
import SpecialtiesGrid from '../components/SpecialtiesGrid'
import YgreneCallout from '../components/YgreneCallout'
import BrandsStrip from '../components/BrandsStrip'
import CTASection from '../components/CTASection'
import { business } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

export default function Home() {
  const { t } = useLang()
  const { intro, assistance, whatWeDo, credentials, ygrene, brands } = t

  return (
    <>
      <Hero />
      <TrustBar />

      {/* Intro + Assistance Without Limits */}
      <section className="section">
        <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <img
              src="/images/technician.jpg"
              alt={assistance.photoAlt}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
            />
            <div className="absolute -bottom-6 right-6 hidden max-w-[16rem] rounded-2xl bg-navy-900 p-5 text-white shadow-xl sm:block">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-400">{assistance.eyebrow}</p>
              <p className="mt-1 font-display text-lg font-bold leading-snug">{assistance.heading}</p>
            </div>
          </div>
          <div>
            <span className="eyebrow">{intro.eyebrow}</span>
            <h2 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">{intro.heading}</h2>
            {intro.body.map((p) => (
              <p key={p} className="mt-4 text-navy-600">
                {p}
              </p>
            ))}
            <div className="mt-8 border-l-4 border-green-500 pl-5">
              <h3 className="text-xl font-bold text-navy-900">{assistance.heading}</h3>
              <p className="mt-2 text-navy-600">{assistance.body}</p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-green-600"
            >
              {assistance.learnMore}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section bg-navy-50">
        <div className="container">
          <div className="max-w-2xl">
            <span className="eyebrow">{whatWeDo.eyebrow}</span>
            <h2 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">{whatWeDo.heading}</h2>
            <p className="mt-4 text-navy-600">{whatWeDo.body}</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold text-navy-700">{whatWeDo.more}</p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-green-600"
            >
              {whatWeDo.viewAll}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SpecialtiesGrid />

      {/* Credentials + Ygrene */}
      <section className="section">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="eyebrow">{credentials.eyebrow}</span>
            <h2 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">{credentials.heading}</h2>
            <p className="mt-4 text-navy-600">{credentials.body}</p>
            <ul className="mt-6 space-y-3">
              {credentials.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm font-semibold text-navy-800">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-3">
            <div className="flex items-center gap-5 rounded-3xl bg-navy-900 p-8 text-white">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-300">
                <ShieldCheck className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-navy-300">
                  {credentials.licenseLabel}
                </p>
                <p className="font-display text-3xl font-extrabold">{business.license}</p>
              </div>
            </div>
            <YgreneCallout heading={ygrene.heading} body={ygrene.body} badge={ygrene.badge} />
          </div>
        </div>
      </section>

      <section className="border-y border-navy-100 bg-navy-50 py-14">
        <div className="container">
          <BrandsStrip eyebrow={brands.eyebrow} heading={brands.heading} brands={brands.list} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
