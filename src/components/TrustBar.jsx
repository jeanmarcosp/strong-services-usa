import { useLang } from '../i18n/LanguageContext'

export default function TrustBar() {
  const { t } = useLang()

  return (
    <div className="border-b border-navy-100 bg-navy-50">
      <div className="container grid grid-cols-2 gap-6 py-6 lg:grid-cols-4">
        {t.trustPoints.map(({ label, icon: Icon }) => (
          <div key={label} className="flex items-center justify-center gap-3 text-center">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-navy-800">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
