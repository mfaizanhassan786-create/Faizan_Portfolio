/**
 * Generated, art-directed project artwork.
 * No fake screenshots: each variant is an abstract diagram of the project's
 * actual technical focus.
 */
export default function ProjectVisual({ variant = 'vision', className = '' }) {
  const dotStyle = {
    backgroundImage:
      'radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)',
    backgroundSize: '16px 16px',
  };

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-white/[0.02] ${className}`}
      style={dotStyle}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_30%_20%,rgba(108,59,219,0.20),transparent_70%)]"
      />

      <svg
        viewBox="0 0 420 300"
        className="relative h-full w-full transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
        role="img"
        aria-label="Abstract technical diagram representing the project"
      >
        {variant === 'vision' ? (
          <g>
            <rect
              x="48"
              y="34"
              width="324"
              height="232"
              rx="12"
              fill="none"
              stroke="rgba(255,255,255,0.10)"
              strokeDasharray="3 7"
            />
            <g className="opacity-70 transition-opacity duration-500 group-hover:opacity-100">
              <rect
                x="92"
                y="78"
                width="94"
                height="152"
                rx="6"
                fill="rgba(108,59,219,0.16)"
                stroke="#A483F5"
                strokeWidth="1.2"
              />
              <path d="M92 92V78h14M172 78h14v14M186 216v14h-14M106 230H92v-14" stroke="#C2AAFB" strokeWidth="1.6" fill="none" />
              <text
                x="92"
                y="68"
                fill="rgba(255,255,255,0.55)"
                fontSize="9"
                fontFamily="'JetBrains Mono', monospace"
                letterSpacing="1.4"
              >
                PERSON · 0.94
              </text>
            </g>

            <g className="opacity-55 transition-opacity duration-500 group-hover:opacity-100">
              <rect
                x="218"
                y="112"
                width="66"
                height="44"
                rx="6"
                fill="rgba(52,120,246,0.16)"
                stroke="#5F95F9"
                strokeWidth="1.2"
              />
              <path d="M218 124v-12h12M272 112h12v12M284 144v12h-12M230 156h-12v-12" stroke="#8FB5FF" strokeWidth="1.6" fill="none" />
              <text
                x="218"
                y="102"
                fill="rgba(255,255,255,0.55)"
                fontSize="9"
                fontFamily="'JetBrains Mono', monospace"
                letterSpacing="1.4"
              >
                PPE · HELMET
              </text>
            </g>

            <g className="opacity-45 transition-opacity duration-500 group-hover:opacity-80">
              <rect
                x="236"
                y="186"
                width="88"
                height="40"
                rx="6"
                fill="none"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
              <text
                x="244"
                y="211"
                fill="rgba(255,255,255,0.45)"
                fontSize="9"
                fontFamily="'JetBrains Mono', monospace"
                letterSpacing="1.2"
              >
                SCAN AREA
              </text>
            </g>

            <path d="M206 152h12M254 134l-36 22" stroke="rgba(255,255,255,0.22)" strokeWidth="1" strokeDasharray="3 3" />
          </g>
        ) : null}

        {variant === 'api' ? (
          <g>
            <rect x="56" y="52" width="308" height="196" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" />
            <path d="M56 84h308" stroke="rgba(255,255,255,0.10)" />
            <circle cx="74" cy="68" r="3" fill="rgba(255,255,255,0.25)" />
            <circle cx="86" cy="68" r="3" fill="rgba(255,255,255,0.18)" />
            <circle cx="98" cy="68" r="3" fill="rgba(255,255,255,0.12)" />
            <text
              x="330"
              y="71"
              fill="rgba(255,255,255,0.32)"
              fontSize="8.5"
              fontFamily="'JetBrains Mono', monospace"
              letterSpacing="1.2"
              textAnchor="end"
            >
              /api/v1
            </text>

            {[
              { y: 104, method: 'GET', path: '/flights', tone: '#5F95F9' },
              { y: 140, method: 'POST', path: '/flights', tone: '#A483F5' },
              { y: 176, method: 'GET', path: '/flights/{id}', tone: '#5F95F9' },
              { y: 212, method: 'PUT', path: '/bookings', tone: '#A483F5' },
            ].map((row, index) => (
              <g key={row.path + row.method} className="transition-opacity duration-500" opacity={index === 0 ? 1 : 0.7}>
                <rect x="74" y={row.y - 12} width="44" height="20" rx="4" fill={row.tone} fillOpacity="0.16" />
                <text
                  x="96"
                  y={row.y + 2}
                  fill={row.tone}
                  fontSize="8.5"
                  fontFamily="'JetBrains Mono', monospace"
                  textAnchor="middle"
                  letterSpacing="0.8"
                >
                  {row.method}
                </text>
                <text
                  x="130"
                  y={row.y + 2}
                  fill="rgba(255,255,255,0.62)"
                  fontSize="10"
                  fontFamily="'JetBrains Mono', monospace"
                >
                  {row.path}
                </text>
                <text
                  x="334"
                  y={row.y + 2}
                  fill="rgba(255,255,255,0.28)"
                  fontSize="8.5"
                  fontFamily="'JetBrains Mono', monospace"
                  textAnchor="end"
                >
                  200
                </text>
              </g>
            ))}
          </g>
        ) : null}

        {variant === 'workflow' ? (
          <g>
            <path
              d="M120 96h48M216 96h44M120 204h48M216 204h44M292 116v56"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
            <path d="M160 92l6 4-6 4M252 92l6 4-6 4" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" fill="none" />

            <g>
              <rect x="48" y="72" width="72" height="48" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
              <text x="84" y="94" fill="rgba(255,255,255,0.72)" fontSize="9" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
                PDF
              </text>
              <text x="84" y="107" fill="rgba(255,255,255,0.32)" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
                INTAKE
              </text>
            </g>

            <g>
              <rect x="168" y="72" width="48" height="48" rx="8" fill="rgba(52,120,246,0.14)" stroke="rgba(95,149,249,0.55)" />
              <text x="192" y="94" fill="#8FB5FF" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
                TEXT
              </text>
              <text x="192" y="107" fill="rgba(255,255,255,0.30)" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
                EXTRACT
              </text>
            </g>

            <g>
              <rect x="260" y="72" width="72" height="48" rx="8" fill="rgba(108,59,219,0.18)" stroke="rgba(164,131,245,0.6)" />
              <text x="296" y="94" fill="#C2AAFB" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
                AI STEP
              </text>
              <text x="296" y="107" fill="rgba(255,255,255,0.30)" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
                SCHEMA
              </text>
            </g>

            <g className="opacity-70 transition-opacity duration-500 group-hover:opacity-100">
              <rect x="260" y="172" width="72" height="64" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.20)" />
              <text x="270" y="194" fill="rgba(255,255,255,0.55)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">
                {'{'}
              </text>
              <text x="278" y="196" fill="rgba(255,255,255,0.62)" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
                &quot;field&quot;: …
              </text>
              <text x="278" y="210" fill="rgba(255,255,255,0.45)" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
                &quot;field&quot;: …
              </text>
              <text x="270" y="226" fill="rgba(255,255,255,0.55)" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">
                {'}'}
              </text>
            </g>

            <g>
              <rect x="48" y="180" width="72" height="48" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" strokeDasharray="4 4" />
              <text x="84" y="202" fill="rgba(255,255,255,0.45)" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
                OUTPUT
              </text>
              <text x="84" y="215" fill="rgba(255,255,255,0.24)" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
                JSON
              </text>
            </g>

            <path
              d="M120 204h48M216 204h44"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
          </g>
        ) : null}
      </svg>
    </div>
  );
}
