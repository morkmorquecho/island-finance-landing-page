'use client'

import { useEffect, useState } from 'react'
import { Button } from './button'

export function ScrollHeader() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let previousScroll = window.scrollY

    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrolled(currentScroll > 8)
      setHidden(currentScroll > previousScroll && currentScroll > 80)
      previousScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header${hidden ? ' is-hidden' : ''}${scrolled ? ' is-scrolled' : ''}`}>
      <a className="wordmark" href="https://islandfinance.cc" aria-label="Island Finance, inicio">
        <span className="wordmark-mark" aria-hidden="true">IF</span>
        <span>Island Finance</span>
      </a>
      <Button variant="primary" href="https://islandfinance.cc">Zarpar</Button>
    </header>
  )
}
