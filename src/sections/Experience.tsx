import { Fragment } from 'react'
import { ChevronRight, Sparkles, Star } from 'lucide-react'
import { useMode } from '../hooks/useMode'
import { useLang } from '../hooks/useLang'
import type { ExperienceRole } from '../data/profile'
import { Section } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-')
const startYear = (period: string) => period.match(/\d{4}/)?.[0] ?? ''

/**
 * Carreira como "linha evolutiva" (do primeiro emprego à forma atual) e,
 * abaixo, uma carta por empresa. Recruiter vê impacto; dev vê stack.
 */
export function Experience() {
  const { isDev } = useMode()
  const { profile } = useLang()
  const { ui } = profile
  const stages = [...profile.experience].reverse()

  return (
    <Section id="experiencia" index={2} title={ui.sections.experience}>
      {isDev && (
        <>
          <p className="mb-3 text-xs font-bold tracking-widest text-ink-muted uppercase">{ui.evolution}</p>
          <ol className="mb-12 flex flex-col items-start gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            {stages.map((item, index) => {
              const isCurrent = index === stages.length - 1
              return (
                <Fragment key={item.company}>
                  <li>
                    <a
                      href={`#exp-${slug(item.company)}`}
                      className={`block rounded-xl border-2 border-border px-3 py-2 shadow-card-sm transition-transform hover:-translate-y-0.5 ${
                        isCurrent ? 'bg-accent text-accent-contrast' : 'bg-surface-raised'
                      }`}
                    >
                      <span className="flex items-center gap-1 font-mono text-[10px] font-bold tracking-wider uppercase opacity-80">
                        {isCurrent && <Star size={10} aria-hidden />}
                        {isCurrent ? ui.current : `${ui.stage} ${index + 1}`} · Lv.{startYear(item.period)}
                      </span>
                      <span className="font-display text-lg leading-tight font-bold">{item.company}</span>
                    </a>
                  </li>
                  {!isCurrent && (
                    <li aria-hidden className="pl-4 text-accent sm:pl-0">
                      <ChevronRight size={22} strokeWidth={3} className="rotate-90 sm:rotate-0" />
                    </li>
                  )}
                </Fragment>
              )
            })}
          </ol>
        </>
      )}

      <div className={isDev ? 'space-y-8' : 'space-y-5'}>
        {profile.experience.map((item) => {
          const isGroup = item.roles.length > 1

          return (
            <Card key={item.company} id={`exp-${slug(item.company)}`} className="animate-fade-up scroll-mt-24">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className={isDev ? 'font-display text-2xl font-extrabold' : 'text-xl font-bold'}>{item.company}</h3>
                <Badge mono tone={isDev ? 'accent3' : 'neutral'} className="shrink-0">
                  {item.period}
                </Badge>
              </div>
              <p className="mt-1 text-sm text-ink-muted">{item.location}</p>

              {item.summary && (
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {isDev && <span className="font-mono text-accent">{'//'} </span>}
                  {isDev ? item.summary.dev : item.summary.recruiter}
                </p>
              )}

              <div className={isGroup ? 'mt-6 space-y-8 border-l-2 border-dashed border-border pl-6' : 'mt-4'}>
                {item.roles.map((role) => (
                  <div key={`${role.title}-${role.client ?? item.company}`} className="relative">
                    {isGroup && (
                      <span className="absolute top-1.5 -left-[33px] size-4 rounded-full border-2 border-border bg-accent-2" />
                    )}

                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-base font-bold">
                        {role.title}
                        {role.client && <span className="text-accent"> @ {role.client}</span>}
                      </h4>
                      {role.period && (
                        <Badge mono className="shrink-0">
                          {role.period}
                        </Badge>
                      )}
                    </div>

                    {isDev ? <RoleDev role={role} /> : <RoleRecruiter role={role} />}
                  </div>
                ))}
              </div>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}

function RoleRecruiter({ role }: { role: ExperienceRole }) {
  return (
    <div className="mt-3">
      <p className="text-sm font-semibold text-ink">{role.recruiter.summary}</p>
      <ul className="mt-3 space-y-2">
        {role.recruiter.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
            <Sparkles size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  )
}

function RoleDev({ role }: { role: ExperienceRole }) {
  return (
    <div className="mt-3">
      <div className="flex flex-wrap gap-2">
        {role.dev.stack.map((tech) => (
          <Badge key={tech} mono>
            {tech}
          </Badge>
        ))}
      </div>
      <ul className="mt-4 space-y-2">
        {role.dev.details.map((detail) => (
          <li key={detail} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
            <span className="font-mono text-accent">→</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  )
}
