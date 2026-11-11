# Diretrizes de UI

Design system do site currículo. Estas regras garantem consistência visual nos dois
modos de exibição (recruiter e dev) e devem ser seguidas em qualquer componente novo.

---

## 1. Os dois modos

O site tem duas personalidades visuais, controladas pelo `ModeProvider`:

Os dois modos agora têm públicos bem diferentes:

- **Recruiter** (padrão): página minimalista própria (`sections/RecruiterPage.tsx`),
  uma coluna estreita só de texto — foto, nome, intro, o que estou fazendo agora e
  listas de uma linha (experiência, projetos, formação, stack), com rodapé de links.
  Sem cabeçalho/menu (só os seletores no canto), cards, ícones ou números.
- **Dev**: o tema lúdico **"Quem é esse dev?"** — a foto aparece em silhueta sobre
  raios e é revelada; ao lado, o aparelho **DEV-DEX** vermelho (design original,
  inspirado em enciclopédias de criaturas, com uma janela do mascote no lugar de lente)
  concentra **todas** as informações, como a ficha de uma criatura, em abas: INFO,
  STATS (status base), EVOLUÇÃO (experiência), GOLPES (skills), ITENS (projetos),
  TREINO (formação) e LOG (terminal + contato). A tela tem altura fixa e rolagem
  interna; o direcional troca de aba (◀ ▶) e rola (▲ ▼). Painéis em
  `sections/dex/DexPanels.tsx`. Não use nomes, personagens ou arte de franquias reais.

| | **Recruiter** (padrão) | **Dev** |
|---|---|---|
| Tema | Minimalista: fundo `#fafafa`, texto cinza, links sublinhados | Colorido: papel creme, bordas grossas e sombra chapada |
| Fonte display | Inter (sem fonte display) | Bricolage Grotesque |
| Accent | Preto `#1a1a1a` | Vermelho `#d62d0b` (+ azul `accent-2`, amarelo `accent-3`) |
| Títulos de seção | Caixa alta pequena e espaçada, sem linha | `Nº01` + título + régua |

As bordas `border-2` dos componentes viram 1px no recruiter por uma regra em
`index.css` (fora de `@layer`), então use `border-2` normalmente.

Nunca crie um componente que exista só para um modo sem motivo. O padrão é:
**mesma estrutura, conteúdo e tema diferentes por modo.**

---

## 2. Tokens de cor

**Nunca use cores fixas** (`bg-white`, `text-gray-900`, `text-indigo-600`...).
Use sempre os tokens semânticos, que mudam automaticamente conforme o modo:

| Token | Uso |
|---|---|
| `bg-surface` | Fundo da página |
| `bg-surface-raised` | Fundo de cards, header, elementos elevados |
| `text-ink` | Texto principal, títulos |
| `text-ink-muted` | Texto secundário, descrições, metadados |
| `bg-accent` / `text-accent` | Cor de destaque (botões primários, links, ícones, prefixos) |
| `text-accent-contrast` | Texto sobre fundo `bg-accent` |
| `border-border` | Todas as bordas |

Os tokens são definidos em `src/index.css` como CSS custom properties
(`--surface`, `--ink`...) e mapeados no `@theme` do Tailwind. Para trocar a
paleta, edite apenas os valores em `:root` (recruiter) e `.dark` (dev).

### Accent por modo

A cor de destaque é parte da identidade do modo. Não force uma accent diferente
da do tema ativo — se precisar de uma terceira cor semântica (ex.: sucesso,
erro), crie um token novo seguindo o mesmo padrão.

---

## 3. Tipografia

| Fonte | Token Tailwind | Uso |
|---|---|---|
| Inter | `font-sans` (padrão do `body`) | Todo o texto da interface |
| JetBrains Mono | `font-mono` | Terminal, badges técnicas, períodos, prefixos de modo dev, código |

Escala de títulos:

- `h1` (hero): `text-4xl sm:text-5xl font-extrabold tracking-tight`
- `h2` (seções): `text-3xl font-bold tracking-tight` — sempre via componente `Section`
- `h3` (itens): `text-lg` a `text-xl font-semibold`

Texto de apoio: `text-sm` ou `text-base` com `text-ink-muted` e `leading-relaxed`.

---

## 4. Espaçamento e layout

- Container central: `mx-auto w-full max-w-4xl px-6` (definido no `Section` e no `Header`)
- Ritmo vertical de seção: `py-16 sm:py-20`
- Espaçamento interno de cards: `p-6` (ou `p-5` em cards pequenos)
- Gaps padrão: `gap-2` (badges), `gap-3` (botões), `gap-6` (grids)
- Grids: `grid gap-6 sm:grid-cols-2` (projetos) ou `lg:grid-cols-3` (skills)

---

## 5. Raios de borda e sombras

- Botões e elementos pequenos: `rounded-lg` / `rounded-full` (pills)
- Cards e janelas: `rounded-xl`
- Sombras: discretas — `shadow-sm` em cards, `shadow-lg` apenas na janela de terminal
- Borda é preferida a sombra para separar superfícies (`border border-border`)

---

## 6. Componentes base (usar, não reinventar)

| Componente | Arquivo | Quando usar |
|---|---|---|
| `Section` | `components/ui/Section.tsx` | Toda seção da página (id, título, prefixo de modo) |
| `Card` | `components/ui/Card.tsx` | Blocos de conteúdo elevado (projetos, contato) |
| `Badge` | `components/ui/Badge.tsx` | Chips de stack, períodos, metadados (`mono` no modo dev) |
| `ButtonLink` | `components/ui/ButtonLink.tsx` | CTAs que navegam (`primary` ou `outline`) |
| `ModeToggle` | `components/ui/ModeToggle.tsx` | Apenas no `Header` |
| `GithubIcon` / `LinkedinIcon` | `components/ui/icons.tsx` | Ícones de marca (o lucide não os tem) |

Demais ícones: **lucide-react**, sempre com `size={...}` explícito e
`aria-hidden` quando decorativos.

---

## 7. Movimento

- Entrada de conteúdo: `animate-fade-up` (token definido no `@theme`)
- Hover em cards: transição de `border-color` para `accent/60`
- Hover em botões: `hover:-translate-y-0.5`
- Scroll: `scroll-smooth` global + `scroll-mt-24` nas seções (compensa o header fixo)
- A troca de modo transiciona `background-color`, `border-color` e `color` (0.3s),
  definida globalmente no `@layer base`

Nada de animações longas ou chamativas: o site deve parecer rápido, não ocupado.

---

## 8. Acessibilidade

- Contraste garantido pelos tokens (verifique ao mudar a paleta: mínimo AA 4.5:1 para texto)
- Todo controle interativo tem foco visível via `:focus-visible` com outline em `accent`
- Ícones decorativos com `aria-hidden`; ícones-link com `aria-label` descritivo
- O `ModeToggle` usa `role="group"` + `aria-pressed` nos botões
- Navegação por âncoras com `id` único por seção
- `lang="pt-BR"` no `index.html`

---

## 9. Conteúdo por modo

As regras de conteúdo são tão importantes quanto as visuais:

- **Recruiter**: frases orientadas a impacto e resultado. Métricas quando possível
  ("processa milhões de pontos de dados"). Zero jargão desnecessário.
- **Dev**: detalhes de implementação, stack exata, decisões de arquitetura e
  trade-offs. Pode usar jargão técnico à vontade.

Todo o conteúdo vive em `src/data/profile.ts` — nunca hardcode texto de perfil
nos componentes.
