import { useMode } from '../hooks/useMode'
import { useLang } from '../hooks/useLang'
import { Section } from '../components/ui/Section'
import { Badge } from '../components/ui/Badge'
import { toneCycle } from '../components/ui/badge-tones'

/**
 * Skills agrupadas por categoria. As listas vêm do profile.ts e são
 * diferentes por modo (recruiter foca em entrega/colaboração, dev em stack).
 */
export function Skills() {
  const { isDev } = useMode()
  const { profile } = useLang()
  const groups = isDev ? profile.skills.dev : profile.skills.recruiter

  return (
    <Section id="skills" index={5} title={profile.ui.sections.skills}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => (
          <div
            key={group.category}
            className="animate-fade-up rounded-2xl border-2 border-border bg-surface-raised p-5 shadow-card"
          >
            <h3 className="mb-4">
              <Badge tone={toneCycle[index % toneCycle.length]} mono={isDev} className="text-[11px] tracking-wider uppercase">
              {group.category}
              </Badge>
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
