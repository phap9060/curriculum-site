import { Briefcase } from 'lucide-react'
import { useMode } from '../hooks/useMode'
import { profile } from '../data/profile'
import { Section } from '../components/ui/Section'
import { Badge } from '../components/ui/Badge'

/**
 * Timeline vertical. Recruiter vê impacto com métricas; dev vê stack e
 * decisões de engenharia. Mesma estrutura, conteúdo diferente.
 */
export function Experience() {
  const { isDev } = useMode()

  return (
    <Section id="experiencia" title="Experiência">
      <ol className="relative space-y-12 border-l border-border pl-8">
        {profile.experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="relative animate-fade-up">
            <span className="absolute -left-10 top-1.5 flex size-4 items-center justify-center rounded-full border-2 border-accent bg-surface" />

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">
                {item.role} <span className="text-accent">@ {item.company}</span>
              </h3>
              <Badge mono className="shrink-0">
                {item.period}
              </Badge>
            </div>

            <p className="mt-1 text-sm text-ink-muted">{item.location}</p>

            {isDev ? (
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {item.dev.stack.map((tech) => (
                    <Badge key={tech} mono>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="mt-4 space-y-2">
                  {item.dev.details.map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                      <span className="font-mono text-accent">→</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="mt-4">
                <p className="text-sm font-medium text-ink">{item.recruiter.summary}</p>
                <ul className="mt-3 space-y-2">
                  {item.recruiter.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                      <Briefcase size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}
