import { useMode } from '../hooks/useMode'
import { useLang } from '../hooks/useLang'
import { Section } from '../components/ui/Section'
import { Badge } from '../components/ui/Badge'

/**
 * Skills agrupadas por categoria. As listas vêm do profile.ts e são
 * diferentes por modo (recruiter foca em entrega/colaboração, dev em stack).
 */
export function Skills() {
  const { isDev } = useMode()
  const { profile } = useLang()
  const groups = isDev ? profile.skills.dev : profile.skills.recruiter

  return (
    <Section id="skills" title={profile.ui.sections.skills}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.category}
            className="animate-fade-up rounded-xl border border-border bg-surface-raised p-5"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
              {isDev ? `// ${group.category}` : group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Badge key={skill} mono={isDev}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
