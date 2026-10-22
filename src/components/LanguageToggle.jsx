import { Globe } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { languageNames } from '../data/content'

// Globe + language toggle. Shows the language you'll switch TO.
export default function LanguageToggle({ className = '' }) {
  const { lang, toggle } = useLang()
  const other = lang === 'en' ? 'es' : 'en'

  return (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-950 ${className}`}
      aria-label={`Switch language to ${languageNames[other]}`}
    >
      <Globe className="h-4 w-4" aria-hidden="true" />
      {languageNames[other]}
    </button>
  )
}
