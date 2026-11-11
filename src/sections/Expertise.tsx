import { ChartLine, FlaskConical, Gauge, Layers, ShieldCheck, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useMode } from '../hooks/useMode'
import { useLang } from '../hooks/useLang'
import type { ExpertiseIcon } from '../data/types'
import { Section } from '../components/ui/Section'
import { Card } from '../components/ui/Card'

const icons: Record<ExpertiseIcon, LucideIcon> = {
  chart: ChartLine,
  gauge: Gauge,
  layers: Layers,
  shield: ShieldCheck,
  flask: FlaskConical,
  users: Users,
}

/**
 * Áreas de especialidade (dataviz, performance, arquitetura, testes...).
 * Recruiter vê o resultado entregue; dev vê as técnicas e ferramentas.
 */
export function Expertise() {
  const { isDev } = useMode()
  const { profile } = useLang()

  return (
    <Section id="especialidades" title={profile.ui.sections.expertise}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.expertise.map((item) => {
          const Icon = icons[item.icon]
          return (
            <Card key={item.icon} className="animate-fade-up p-5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon size={18} aria-hidden />
              </span>
              <h3 className={`mt-4 font-semibold ${isDev ? 'font-mono text-sm' : ''}`}>{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {isDev ? item.dev : item.recruiter}
              </p>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
