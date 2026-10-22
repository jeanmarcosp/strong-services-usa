import Glow from './Glow'

export default function PageHeader({ eyebrow, title, subtitle, image, children }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40" aria-hidden="true" />
      <Glow />
      <div className="container relative py-16 lg:py-24">
        {eyebrow && <span className="eyebrow text-green-400">{eyebrow}</span>}
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-navy-200">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
