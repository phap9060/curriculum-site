import { Briefcase } from 'lucide-react'
import { useMode } from '../hooks/useMode'
import { profile } from '../data/profile'
import type { ExperienceRole } from '../data/profile'
import { Section } from '../components/ui/Section'
import { Badge } from '../components/ui/Badge'

/**
 * Timeline vertical agrupada por empresa. A Raro Labs aparece como um único
 * período com cada cliente como sub-item. Recruiter vê impacto; dev vê stack.
 */
export function Experience() {
  const { isDev } = useMode()

  return (
    <Section id="experiencia" title="Experiência">
      <ol className="relative space-y-12 border-l border-border pl-8">
        {profile.experience.map((item) => {
          const isGroup = item.roles.length > 1

          return (
            <li key={item.company} className="relative animate-fade-up">
              <span className="absolute -left-10 top-1.5 flex size-4 items-center justify-center rounded-full border-2 border-accent bg-surface" />

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">{item.company}</h3>
                <Badge mono className="shrink-0">
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

              <div className={isGroup ? 'mt-6 space-y-8 border-l border-border pl-6' : 'mt-4'}>
                {item.roles.map((role) => (
                  <div key={`${role.title}-${role.client ?? item.company}`} className="relative">
                    {isGroup && (
                      <span className="absolute -left-[29px] top-2 size-2 rounded-full bg-accent/70" />
                    )}

                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-base font-semibold">
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
            </li>
          )
        })}
      </ol>
    </Section>
  )
}

function RoleRecruiter({ role }: { role: ExperienceRole }) {
  return (
    <div className="mt-4">
      <p className="text-sm font-medium text-ink">{role.recruiter.summary}</p>
      <ul className="mt-3 space-y-2">
        {role.recruiter.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
            <Briefcase size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  )
}

function RoleDev({ role }: { role: ExperienceRole }) {
  return (
    <div className="mt-4">
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
