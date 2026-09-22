import { profile } from '../data/profile.js'

function toggleTheme() {
  const root = document.documentElement
  const cur =
    root.getAttribute('data-theme') ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  const next = cur === 'dark' ? 'light' : 'dark'
  root.setAttribute('data-theme', next)
  try {
    localStorage.setItem('theme', next)
  } catch (e) {}
}

export default function Header() {
  return (
    <header className="top">
      <a className="me" href="#top">
        {profile.firstName} {profile.lastName}
      </a>
      <nav aria-label="Sections">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a className="keep" href="#contact">Contact</a>
        <button className="theme keep" type="button" onClick={toggleTheme} aria-label="Switch colour theme">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" />
          </svg>
        </button>
      </nav>
    </header>
  )
}
