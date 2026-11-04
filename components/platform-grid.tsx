'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

type Platform = {
  name: string
  initial: string
  brand: string
  description: string
  logo?: string
  darkText?: boolean
}

export function PlatformGrid({ platforms }: { platforms: Platform[] }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="platform-grid"
      aria-label="Plataformas compatibles"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      {platforms.map((platform) => (
        <motion.article
          className={`platform-card platform-${platform.brand}${platform.darkText ? ' platform-dark-text' : ''}`}
          key={platform.name}
          variants={
            shouldReduceMotion
              ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
              : { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }
          }
        >
          <div className="platform-logo-frame">
            {platform.logo ? (
              <Image className="platform-image" src={platform.logo} alt={`${platform.name} logo`} width={120} height={72} unoptimized />
            ) : (
              <span className="platform-logo" aria-hidden="true">{platform.initial}</span>
            )}
          </div>
          <div className="platform-card-copy">
            <h3>{platform.name}</h3>
            <p>{platform.description}</p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  )
}
