import { Snowflake } from 'lucide-react'

// Background decoration for dark sections: airflow streaks, cool blue/green
// glows, and an oversized snowflake echoing the logo mark.
export default function Glow({ snowflake = true }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="airflow absolute inset-0" />
      <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-green-500/15 blur-3xl" />
      <div className="absolute -bottom-40 -left-24 h-[26rem] w-[26rem] rounded-full bg-navy-400/20 blur-3xl" />
      {snowflake && (
        <Snowflake className="absolute -right-16 bottom-[-4rem] h-80 w-80 text-white/[0.04]" strokeWidth={1} />
      )}
    </div>
  )
}
