'use client'

import { Check, Copy } from 'lucide-react'
import { Button } from './button'
import { useState } from 'react'

const credentials = [
  { label: 'Usuario', value: 'islandfinance' },
  { label: 'Contraseña', value: 'islandfinance' },
]

export function ExploreDemo() {
  const [copied, setCopied] = useState<string | null>(null)

  async function copyCredential(label: string, value: string) {
    await navigator.clipboard.writeText(value)
    setCopied(label)
    window.setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="explore-card">
      <div className="credential-list">
        {credentials.map((credential) => {
          const isCopied = copied === credential.label
          return (
            <div className="credential-row" key={credential.label}>
              <div>
                <span className="credential-label">{credential.label}</span>
                <strong>{credential.value}</strong>
              </div>
              <Button
                variant="secondary"
                className="copy-button"
                type="button"
                onClick={() => copyCredential(credential.label, credential.value)}
                aria-label={`Copiar ${credential.label.toLowerCase()}`}
              >
                {isCopied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
                <span>{isCopied ? '¡Copiado!' : 'Copiar'}</span>
              </Button>
            </div>
          )
        })}
      </div>
      <Button variant="primary" className="explore-cta" href="https://islandfinance.cc">Explorar la isla</Button>
    </div>
  )
}
