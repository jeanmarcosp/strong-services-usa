import { MapPin } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { title, category, image, location, year, description } = project
  const meta = [location, year].filter(Boolean).join(' · ')

  return (
    <div className="group overflow-hidden rounded-2xl border border-navy-100 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-navy-950/90 px-3 py-1 text-xs font-semibold text-green-300">
          {category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-navy-900">{title}</h3>
        {meta && (
          <div className="mt-1 flex items-center gap-1.5 text-sm text-navy-500">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{meta}</span>
          </div>
        )}
        <p className="mt-3 text-sm leading-relaxed text-navy-600">{description}</p>
      </div>
    </div>
  )
}
