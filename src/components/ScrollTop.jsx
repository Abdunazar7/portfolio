import { useEffect, useState } from 'react'

// Appears once you've scrolled past the hero. The ring shows how far down the page you are.
export default function ScrollTop() {
  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(false)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const max = document.documentElement.scrollHeight - window.innerHeight
        setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0)
        setShow(window.scrollY > window.innerHeight * 0.8)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const toTop = () => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
    document.getElementById('top')?.focus?.({ preventScroll: true })
  }

  const r = 21
  const c = 2 * Math.PI * r

  return (
    <button
      type="button"
      className={`to-top ${show ? 'on' : ''}`}
      onClick={toTop}
      aria-label="Back to top"
      title="Back to top"
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
    >
      <svg className="ring" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r={r} className="ring-bg" />
        <circle
          cx="24"
          cy="24"
          r={r}
          className="ring-fill"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - progress)}
        />
      </svg>
      <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5m0 0-7 7m7-7 7 7" />
      </svg>
    </button>
  )
}
