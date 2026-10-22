import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, ShieldCheck } from 'lucide-react'
import { business } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  // Flatten nav so Residential / Commercial appear as their own site links.
  const links = t.nav.flatMap((link) => [link, ...(link.children ?? [])])

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="/images/logo.png"
            alt={`${business.name} logo`}
            className="h-14 w-auto rounded-2xl bg-white px-3 py-2"
          />
          <p className="mt-4 max-w-xs text-sm text-navy-300">{t.tagline}</p>
          <a
            href={business.facebook}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-200 hover:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </span>
            {t.footer.followUs}
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white">{t.footer.siteLinks}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-navy-300 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white">{t.footer.getInTouch}</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
              <a href={business.mapUrl} target="_blank" rel="noreferrer" className="text-navy-300 hover:text-white">
                {business.address.line1}
                <br />
                {business.address.city}, {business.address.state} {business.address.zip}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-green-400" />
              <a href={business.phoneHref} className="text-navy-300 hover:text-white">
                {business.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-green-400" />
              <a href={business.emailHref} className="break-all text-navy-300 hover:text-white">
                {business.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-green-400" />
              <span className="text-navy-300">{t.footer.available}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white">{t.footer.serviceArea}</h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-300">
            {business.counties.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-navy-200">
            <ShieldCheck className="h-4 w-4 text-green-400" aria-hidden="true" />
            {t.footer.license} {business.license}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-navy-400 sm:flex-row">
          <p>
            © {year} {business.name}. {t.footer.rightsReserved}
          </p>
          <p>{t.serviceArea}</p>
        </div>
      </div>
    </footer>
  )
}
