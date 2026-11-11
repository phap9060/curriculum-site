/**
 * Mascote original do site: uma criatura com orelhas pontudas, óculos de dev,
 * "</>" na barriga e uma cauda em forma de sparkline (referência a dataviz).
 * As cores vêm dos tokens `--mascot-*`, então ele muda junto com o modo.
 * Para virar silhueta, aplique a classe `mascot-hidden`.
 */
export function Mascot({ className }: { className?: string }) {
  const line = 'var(--mascot-line)'
  const body = 'var(--mascot-body)'

  return (
    <svg viewBox="0 0 200 220" className={className} aria-hidden focusable="false">
      {/* cauda: um pequeno gráfico de linha */}
      <path
        d="M148 170 C172 168 168 134 184 122 C194 114 194 100 188 86"
        fill="none"
        stroke={line}
        strokeWidth="15"
        strokeLinecap="round"
      />
      <path
        d="M148 170 C172 168 168 134 184 122 C194 114 194 100 188 86"
        fill="none"
        stroke="var(--mascot-tail)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="184" cy="122" r="7" fill="var(--mascot-tail)" stroke={line} strokeWidth="3.5" />
      <circle cx="188" cy="86" r="7" fill="var(--mascot-tail)" stroke={line} strokeWidth="3.5" />

      {/* orelhas */}
      <path d="M66 92 L44 32 L98 72 Z" fill={body} stroke={line} strokeWidth="6" strokeLinejoin="round" />
      <path d="M134 92 L156 32 L102 72 Z" fill={body} stroke={line} strokeWidth="6" strokeLinejoin="round" />
      <path d="M62 78 L54 52 L78 70 Z" fill="var(--mascot-tail)" />
      <path d="M138 78 L146 52 L122 70 Z" fill="var(--mascot-tail)" />

      {/* pés */}
      <ellipse cx="72" cy="200" rx="22" ry="11" fill={body} stroke={line} strokeWidth="6" />
      <ellipse cx="128" cy="200" rx="22" ry="11" fill={body} stroke={line} strokeWidth="6" />

      {/* corpo */}
      <path
        d="M100 64 C150 64 164 110 164 142 C164 184 136 204 100 204 C64 204 36 184 36 142 C36 110 50 64 100 64 Z"
        fill={body}
        stroke={line}
        strokeWidth="6"
      />
      <ellipse cx="100" cy="166" rx="38" ry="28" fill="var(--mascot-belly)" />
      <text
        x="100"
        y="174"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', ui-monospace, monospace"
        fontWeight="700"
        fontSize="22"
        fill={line}
      >
        {'</>'}
      </text>

      {/* óculos e olhos */}
      <circle cx="80" cy="118" r="15" fill="var(--mascot-eye)" stroke={line} strokeWidth="5" />
      <circle cx="120" cy="118" r="15" fill="var(--mascot-eye)" stroke={line} strokeWidth="5" />
      <path d="M95 117 h10" stroke={line} strokeWidth="5" strokeLinecap="round" />
      <circle cx="83" cy="120" r="5.5" fill={line} />
      <circle cx="123" cy="120" r="5.5" fill={line} />
      <circle cx="85" cy="117.5" r="1.8" fill="var(--mascot-eye)" />
      <circle cx="125" cy="117.5" r="1.8" fill="var(--mascot-eye)" />

      {/* sorriso */}
      <path d="M89 141 Q100 150 111 141" fill="none" stroke={line} strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  )
}
