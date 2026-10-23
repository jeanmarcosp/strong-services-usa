import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'
import { business } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  const details = [
    { icon: Phone, label: c.phone, value: business.phone, href: business.phoneHref },
    { icon: Mail, label: c.email, value: business.email, href: business.emailHref },
    {
      icon: MapPin,
      label: c.address,
      value: `${business.address.line1}, ${business.address.city}, ${business.address.state} ${business.address.zip}`,
      href: business.mapUrl,
    },
    { icon: Clock, label: c.hours, value: c.hoursValue },
  ]

  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} image="/images/hero.jpg" />

      <section className="section">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="space-y-6">
              {details.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold uppercase tracking-widest text-navy-400">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="break-words text-lg font-semibold text-navy-900 hover:text-green-600"
                        {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-navy-900">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-navy-100">
              <iframe
                src={business.mapEmbedUrl}
                title={c.mapTitle}
                className="aspect-[16/10] w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
