import { Mail } from 'lucide-react'
import { useMode } from '../hooks/useMode'
import { useLang } from '../hooks/useLang'
import { identity } from '../data/profile'
import { Section } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { Mascot } from '../components/ui/Mascot'
import { ButtonLink } from '../components/ui/ButtonLink'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/ui/icons'

/** CTA final de contato, com título e subtítulo específicos por modo. */
export function Contact() {
  const { isDev } = useMode()
  const { profile } = useLang()
  const content = isDev ? profile.contact.dev : profile.contact.recruiter

  return (
    <Section id="contato" index={6} title={profile.ui.sections.contact}>
      <Card className="animate-fade-up py-10 text-center hover:translate-y-0">
        <Mascot className="mx-auto mb-4 w-24 -rotate-6" />
        <h3 className="font-display text-4xl font-extrabold tracking-tight">
          {content.title}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-ink-muted">{content.subtitle}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href={`mailto:${identity.social.email}`}>
            <Mail size={16} aria-hidden />
            {identity.social.email}
          </ButtonLink>
          <ButtonLink variant="outline" href={identity.social.whatsapp} target="_blank" rel="noopener noreferrer">
            <WhatsappIcon size={16} />
            WhatsApp
          </ButtonLink>
          <ButtonLink variant="outline" href={identity.social.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon size={16} />
            LinkedIn
          </ButtonLink>
          <ButtonLink variant="outline" href={identity.social.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon size={16} />
            GitHub
          </ButtonLink>
        </div>
      </Card>
    </Section>
  )
}
