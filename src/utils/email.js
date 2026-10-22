// Stricter than the browser's type="email" check, which accepts "jane@gmail".
// Requires a dotted domain ending in a 2+ letter TLD, e.g. "jane@gmail.com".
export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[a-z]{2,}$/i.test(value.trim())
}

// Common providers. Exact matches are never "corrected" — mail.com, me.com, etc.
// are listed so they aren't mistaken for typos of gmail.com / msn.com.
const COMMON_DOMAINS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com',
  'live.com', 'msn.com', 'me.com', 'mac.com', 'mail.com', 'comcast.net', 'att.net',
  'bellsouth.net', 'verizon.net', 'protonmail.com', 'yahoo.es', 'hotmail.es',
]

function editDistance(a, b) {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0]
    row[0] = i
    for (let j = 1; j <= b.length; j++) {
      const temp = row[j]
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1))
      prev = temp
    }
  }
  return row[b.length]
}

// Returns a corrected address when the domain looks like a typo of a common
// provider (e.g. "jane@gmial.com" → "jane@gmail.com"), otherwise null.
export function suggestEmail(value) {
  const [local, domain, ...rest] = value.trim().toLowerCase().split('@')
  if (!local || !domain || rest.length || COMMON_DOMAINS.includes(domain)) return null

  let best = null
  // Short domains get less slack, so real ones like att.com aren't "fixed" to aol.com.
  let bestDistance = (domain.length < 9 ? 1 : 2) + 1
  for (const candidate of COMMON_DOMAINS) {
    const distance = editDistance(domain, candidate)
    if (distance < bestDistance) {
      best = candidate
      bestDistance = distance
    }
  }
  return best && `${local}@${best}`
}
