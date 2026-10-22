import { CheckCircle2, CalendarCheck } from 'lucide-react'

export default function MaintenanceChecklist({ title, items }) {
  return (
    <div className="rounded-3xl bg-navy-900 p-8 text-white shadow-xl">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-300">
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="font-display font-bold">{title}</p>
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-navy-100">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
