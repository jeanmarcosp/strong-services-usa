import { Leaf, BadgeCheck } from 'lucide-react'

// Ygrene financing callout, reused on Home, Services and About.
export default function YgreneCallout({ eyebrow, heading, body, badge }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-8 sm:p-10">
      <Leaf className="absolute -right-6 -top-6 h-40 w-40 text-green-600/10" strokeWidth={1} aria-hidden="true" />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
          <Leaf className="h-7 w-7" aria-hidden="true" />
        </div>
        <div>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {badge && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
              {badge}
            </span>
          )}
          <h3 className="mt-3 text-2xl font-extrabold text-navy-900">{heading}</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-navy-600">{body}</p>
        </div>
      </div>
    </div>
  )
}
