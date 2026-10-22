import { CheckCircle2, Leaf, MapPin, Sparkles, Zap } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Glow from '../components/Glow'
import BrandsStrip from '../components/BrandsStrip'
import MaintenanceChecklist from '../components/MaintenanceChecklist'
import YgreneCallout from '../components/YgreneCallout'
import CTASection from '../components/CTASection'
import { useLang } from '../i18n/LanguageContext'

export default function Services() {
  const { t } = useLang()
  const page = t.servicesPage
  const res = page.residential
  const com = page.commercial

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} image="/images/cooling-tower.jpg">
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#residential" className="btn-primary">
            {page.jump.residential}
          </a>
          <a href="#commercial" className="btn-outline">
            {page.jump.commercial}
          </a>
        </div>
      </PageHeader>

      {/* Residential */}
      <section id="residential" className="section">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="eyebrow">{res.eyebrow}</span>
              <h2 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">{res.heading}</h2>
              {res.body.map((p) => (
                <p key={p} className="mt-4 text-navy-600">
                  {p}
                </p>
              ))}
              <div className="mt-6 inline-flex items-start gap-3 rounded-2xl bg-green-50 px-5 py-4">
                <Zap className="mt-0.5 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
                <p className="text-sm text-navy-800">
                  <span className="font-semibold">{res.tipLabel}:</span> {res.tip}
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-black shadow-xl">
              <img src="/images/ac-unit.png" alt={res.photoAlt} className="mx-auto h-full max-h-[32rem] object-contain" />
            </div>
          </div>

          {/* REME HALO */}
          <div className="relative mt-16 overflow-hidden rounded-3xl bg-navy-950 p-8 text-white sm:p-12">
            <Glow />
            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <span className="eyebrow text-green-400">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  {res.reme.eyebrow}
                </span>
                <h3 className="mt-4 text-2xl font-extrabold sm:text-3xl">{res.reme.heading}</h3>
                {res.reme.body.map((p) => (
                  <p key={p} className="mt-4 text-navy-200">
                    {p}
                  </p>
                ))}
              </div>
              <div className="flex flex-col justify-center lg:col-span-2">
                <p className="text-sm font-semibold text-navy-100">{res.reme.effectiveLabel}</p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {res.reme.pollutants.map((p) => (
                    <div
                      key={p}
                      className="rounded-2xl border border-green-400/30 bg-green-500/10 px-3 py-4 text-center text-sm font-bold text-green-200"
                    >
                      {p}
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm text-navy-200">{res.reme.allergy}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-navy-100 p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-700">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-900">{res.ratesHeading}</h3>
              <p className="mt-2 text-navy-600">{res.rates}</p>
            </div>
            <div className="rounded-3xl border border-navy-100 p-8">
              <BrandsStrip heading={res.brandsHeading} brands={res.brands} compact />
              <p className="mt-4 text-sm text-navy-500">{res.brandsNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section id="commercial" className="section bg-navy-50">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
              <img
                src="/images/rooftop-unit.jpg"
                alt={com.photoAlts[0]}
                className="col-span-2 aspect-[16/9] w-full rounded-3xl object-cover shadow-lg"
              />
              <img
                src="/images/carrier-install.jpg"
                alt={com.photoAlts[1]}
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
              />
              <img
                src="/images/unit-sunset.jpg"
                alt=""
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="eyebrow">{com.eyebrow}</span>
              <h2 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">{com.heading}</h2>
              {com.body.map((p) => (
                <p key={p} className="mt-4 text-navy-600">
                  {p}
                </p>
              ))}
              <ul className="mt-6 flex flex-wrap gap-2">
                {com.equipment.map((e) => (
                  <li
                    key={e}
                    className="rounded-full border border-navy-200 bg-white px-4 py-1.5 text-sm font-semibold text-navy-700"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Monthly PM */}
          <div className="mt-20 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="eyebrow">{com.pm.eyebrow}</span>
              <h3 className="mt-4 text-2xl font-extrabold text-navy-900 sm:text-3xl">{com.pm.heading}</h3>
              {com.pm.body.map((p) => (
                <p key={p} className="mt-4 text-navy-600">
                  {p}
                </p>
              ))}
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-green-50 px-5 py-4">
                <Leaf className="mt-0.5 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
                <p className="text-sm text-navy-800">{com.eco}</p>
              </div>
            </div>
            <MaintenanceChecklist title={com.pm.checklistTitle} items={com.pm.checklist} />
          </div>

          <div className="mt-10 rounded-3xl border border-navy-100 bg-white p-8">
            <BrandsStrip heading={com.brandsHeading} brands={com.brands} compact />
            <p className="mt-4 text-sm text-navy-500">{com.brandsNote}</p>
          </div>
        </div>
      </section>

      {/* More advantages */}
      <section className="section pb-0">
        <div className="container">
          <YgreneCallout eyebrow={page.advantages.eyebrow} heading={page.advantages.heading} body={page.advantages.body} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
