import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { content } from '../data/content'

const STORAGE_KEY = 'ssu-lang'
const SUPPORTED = ['en', 'es']

const LanguageContext = createContext(null)

function getInitialLang() {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (SUPPORTED.includes(saved)) return saved
  // English default for first-time visitors.
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => {
    const setLang = (next) => {
      if (SUPPORTED.includes(next)) setLangState(next)
    }
    return {
      lang,
      setLang,
      toggle: () => setLangState((prev) => (prev === 'en' ? 'es' : 'en')),
      // `t` is the resolved content bundle for the active language.
      t: content[lang],
    }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
