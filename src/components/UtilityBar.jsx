import { Clock, Mail, Phone, ShieldCheck } from 'lucide-react'
import { business } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

// Thin 24/7 contact strip above the main nav.
export default function UtilityBar() {
  const { t } = useLang()

  return (
    <div className="bg-navy-950 text-xs text-navy-200">
      <div className="container flex h-10 items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5 font-semibold text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <Clock className="hidden h-3.5 w-3.5 sm:block" aria-hidden="true" />
            {t.utility.available}
          </span>
          <span className="hidden items-center gap-1.5 md:inline-flex">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            {t.utility.license} {business.license}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a href={business.emailHref} className="hidden items-center gap-1.5 hover:text-white sm:inline-flex">
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            {business.email}
          </a>
          <a href={business.phoneHref} className="inline-flex items-center gap-1.5 font-semibold text-white">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {business.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
