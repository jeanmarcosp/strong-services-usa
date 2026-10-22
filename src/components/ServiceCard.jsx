export default function ServiceCard({ service }) {
  const { title, summary, icon: Icon } = service
  return (
    <div className="group relative flex flex-col rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-700 transition-colors group-hover:bg-green-600 group-hover:text-white">
        {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
      </div>
      <h3 className="mt-5 text-lg font-bold text-navy-900">{title}</h3>
      {summary && <p className="mt-2 text-sm leading-relaxed text-navy-600">{summary}</p>}
    </div>
  )
}
