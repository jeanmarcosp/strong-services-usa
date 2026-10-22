// US phone helpers for the contact form.

// Digits only, without a leading US country code (area codes never start with 1).
const toDigits = (value) => value.replace(/\D/g, '').replace(/^1/, '').slice(0, 10)

// Formats progressively as the user types: "305" → "(305) 5" → "(305) 555-1234".
export function formatPhone(value) {
  const d = toDigits(value)
  if (d.length < 4) return d
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
}

// Valid NANP number: area code and exchange can't start with 0 or 1.
export function isValidPhone(value) {
  return /^[2-9]\d{2}[2-9]\d{6}$/.test(toDigits(value))
}
