import { GraduationCap } from 'lucide-react'
import { profile } from '../data/profile'
import { Section } from '../components/ui/Section'
import { Badge } from '../components/ui/Badge'

/** Formação acadêmica — mesma para os dois modos. */
export function Education() {
  return (
    <Section id="formacao" title="Formação">
      <ol className="space-y-6">
        {profile.education.map((item) => (
          <li key={item.title} className="flex animate-fade-up items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <GraduationCap size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-ink-muted">{item.institution}</p>
              </div>
            </div>
            <Badge mono className="shrink-0">
              {item.period}
            </Badge>
          </li>
        ))}
      </ol>
    </Section>
  )
}
