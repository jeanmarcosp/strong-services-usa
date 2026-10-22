import { Send } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

// NOTE: This form is a styled UI placeholder — it does not submit yet.
// Wiring to an email/backend service is planned for a later phase.
export default function ContactForm() {
  const { t } = useLang()
  const f = t.form

  const handleSubmit = (e) => {
    e.preventDefault()
    // Intentionally non-functional in this phase.
  }

  const fieldClass =
    'w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500'
  const labelClass = 'mb-1.5 block text-sm font-semibold text-navy-800'
  const req = <span className="text-green-600">*</span>
  const opt = <span className="font-normal text-navy-400">({f.optional})</span>

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-extrabold text-navy-900">{f.heading}</h2>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            {f.firstName} {req}
          </label>
          <input id="firstName" name="firstName" type="text" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            {f.lastName} {req}
          </label>
          <input id="lastName" name="lastName" type="text" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {f.email} {req}
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            {f.phone} {opt}
          </label>
          <input id="phone" name="phone" type="tel" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            {f.company} {opt}
          </label>
          <input id="company" name="company" type="text" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="model" className={labelClass}>
            {f.model} {opt}
          </label>
          <input id="model" name="model" type="text" placeholder={f.modelPlaceholder} className={fieldClass} />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className={labelClass}>
          {f.message} {req}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={f.messagePlaceholder}
          className={fieldClass}
        />
      </div>

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        <Send className="h-4 w-4" />
        {f.send}
      </button>
      <p className="mt-3 text-xs text-navy-400">{f.callNote}</p>
    </form>
  )
}
