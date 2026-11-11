import { GraduationCap } from 'lucide-react'
import { useLang } from '../hooks/useLang'
import { Section } from '../components/ui/Section'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'

/** Formação acadêmica — mesma para os dois modos. */
export function Education() {
  const { profile } = useLang()

  return (
    <Section id="formacao" index={3} title={profile.ui.sections.education}>
      <Card className="p-0">
      <ol className="divide-y-2 divide-dashed divide-border">
        {profile.education.map((item) => (
          <li key={item.title} className="flex animate-fade-up flex-wrap items-start justify-between gap-3 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border-2 border-border bg-accent-2 text-accent-2-contrast">
                <GraduationCap size={16} aria-hidden />
              </span>
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-ink-muted">{item.institution}</p>
              </div>
            </div>
            <Badge mono className="shrink-0">
              {item.period}
            </Badge>
          </li>
        ))}
      </ol>
      </Card>
    </Section>
  )
}
