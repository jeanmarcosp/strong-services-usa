import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { business } from '../data/content'
import { useLang } from '../i18n/LanguageContext'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useLang()

  const linkClass = ({ isActive }) =>
    `inline-flex items-center gap-1 text-sm font-semibold transition-colors ${
      isActive ? 'text-green-600' : 'text-navy-700 hover:text-navy-950'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/90 backdrop-blur">
      <nav className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt={`${business.name} logo`} className="h-9 w-auto sm:h-11" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {t.nav.map((link) =>
            link.children ? (
              <div key={link.to} className="group relative">
                <NavLink to={link.to} className={linkClass}>
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </NavLink>
                {/* Dropdown; pt-3 bridges the hover gap */}
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="w-48 rounded-2xl border border-navy-100 bg-white p-2 shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-navy-700 hover:bg-green-50 hover:text-green-700"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            ),
          )}
          <LanguageToggle />
          <a href={business.phoneHref} className="btn-primary">
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-1 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-navy-800"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-navy-100 bg-white lg:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {t.nav.map((link) => (
              <div key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-3 py-3 text-base font-semibold ${
                      isActive ? 'bg-green-50 text-green-700' : 'text-navy-800 hover:bg-navy-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
                {link.children && (
                  <div className="ml-3 flex flex-col border-l border-navy-100 pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setOpen(false)}
                        className="rounded-xl px-3 py-2 text-sm font-semibold text-navy-600 hover:bg-navy-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href={business.phoneHref} className="btn-primary mt-2">
              <Phone className="h-4 w-4" />
              {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
