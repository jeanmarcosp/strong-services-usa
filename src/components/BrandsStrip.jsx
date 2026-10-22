// Equipment brands rendered as clean wordmarks (the original site's badge
// images were low-resolution).
export default function BrandsStrip({ eyebrow, heading, brands, compact = false }) {
  return (
    <div className={compact ? '' : 'text-center'}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {heading && (
        <h2 className={`mt-3 font-extrabold text-navy-900 ${compact ? 'text-lg' : 'text-2xl sm:text-3xl'}`}>
          {heading}
        </h2>
      )}
      <ul
        className={`mt-6 flex flex-wrap gap-3 ${compact ? '' : 'justify-center gap-x-4 gap-y-3 sm:mt-8'}`}
      >
        {brands.map((brand) => (
          <li
            key={brand}
            className={`rounded-full border border-navy-100 bg-white font-display font-bold tracking-tight text-navy-700 ${
              compact ? 'px-4 py-1.5 text-sm' : 'px-6 py-3 text-base sm:text-lg'
            }`}
          >
            {brand}
          </li>
        ))}
      </ul>
    </div>
  )
}
