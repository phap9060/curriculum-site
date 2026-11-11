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
 * Especialidades como "atributos" da carta, cada uma com barra de stat.
 * Recruiter vê o resultado entregue; dev vê as técnicas e ferramentas.
 */
export function Expertise() {
  const { isDev } = useMode()
  const { profile } = useLang()

  return (
    <Section id="especialidades" index={1} title={profile.ui.sections.expertise}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {profile.expertise.map((item) => {
          const Icon = icons[item.icon]
          return (
            <Card key={item.icon} className="flex animate-fade-up flex-col p-5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border-2 border-border bg-accent-3 text-accent-3-contrast">
                  <Icon size={18} aria-hidden />
                </span>
                <h3 className="font-display text-xl leading-tight font-bold">{item.title}</h3>
              </div>

              <div className="mt-4 flex items-center gap-3" aria-label={`${item.title}: ${item.stat}/100`}>
                <div className="h-3 flex-1 overflow-hidden rounded-full border-2 border-border bg-surface">
                  <div className="stat-fill h-full" style={{ width: `${item.stat}%` }} />
                </div>
                <span className="w-7 text-right font-mono text-xs font-bold">{item.stat}</span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{isDev ? item.dev : item.recruiter}</p>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
