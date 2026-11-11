import { ExternalLink, FolderGit2, TrendingUp } from 'lucide-react'
import { useMode } from '../hooks/useMode'
import { useLang } from '../hooks/useLang'
import { Section } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { GithubIcon } from '../components/ui/icons'

/**
 * Grid de projetos. Recruiter vê proposta de valor e impacto; dev vê stack
 * e arquitetura. Links para demo e repositório sempre visíveis.
 */
export function Projects() {
  const { isDev } = useMode()
  const { profile } = useLang()

  return (
    <Section id="projetos" title={profile.ui.sections.projects}>
      <div className="grid gap-6 sm:grid-cols-2">
        {profile.projects.map((project) => (
          <Card key={project.name} className="flex animate-fade-up flex-col">
            <div className="flex items-start justify-between gap-3">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <FolderGit2 size={18} className="text-accent" aria-hidden />
                {project.name}
              </h3>
              <div className="flex shrink-0 items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${profile.ui.openDemo} ${project.name}`}
                    className="text-ink-muted transition-colors hover:text-accent"
                  >
                    <ExternalLink size={18} aria-hidden />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${profile.ui.openRepo} ${project.name}`}
                    className="text-ink-muted transition-colors hover:text-accent"
                  >
                    <GithubIcon size={18} />
                  </a>
                )}
              </div>
            </div>

            {isDev ? (
              <div className="mt-4 flex flex-1 flex-col">
                <div className="flex flex-wrap gap-2">
                  {project.dev.stack.map((tech) => (
                    <Badge key={tech} mono>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  <span className="font-mono text-accent">arch: </span>
                  {project.dev.architecture}
                </p>
              </div>
            ) : (
              <div className="mt-4 flex flex-1 flex-col">
                <p className="text-sm font-medium text-ink">{project.recruiter.tagline}</p>
                <ul className="mt-3 space-y-2">
                  {project.recruiter.impact.map((impact) => (
                    <li key={impact} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                      <TrendingUp size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                      {impact}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  )
}
