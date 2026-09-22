import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
import { GitHubIcon, TelegramIcon, LinkedInIcon, DownloadIcon } from './Icons.jsx'

// The numbers are counted from the project data, so they grow as you add projects.
const liveCount = projects.filter((p) => p.status === 'live').length
const apiCount = projects.filter((p) => p.modules?.length).length
const moduleCount = projects.reduce((n, p) => n + (p.modules?.length || 0), 0)
const tickerModules = [...new Set(projects.flatMap((p) => p.modules || []))]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="status">
        <span className="dot" aria-hidden="true" />
        {profile.available}
      </p>
      <h1>
        <span>{profile.firstName}</span>
        <span>{profile.lastName}</span>
      </h1>

      <div className="hero-grid">
        <p className="lede">{profile.headline}</p>
        <div className="hero-side">
          <p>{profile.intro}</p>
          <div className="links">
            <a className="btn primary" href={profile.links.telegram} target="_blank" rel="noopener">
              <TelegramIcon /> Message me
            </a>
            <a className="btn" href={profile.links.github} target="_blank" rel="noopener">
              <GitHubIcon /> GitHub
            </a>
            <a className="btn" href={profile.links.linkedin} target="_blank" rel="noopener">
              <LinkedInIcon /> LinkedIn
            </a>
            <a className="btn" href={profile.cv} download>
              <DownloadIcon /> CV
            </a>
          </div>
        </div>
      </div>

      <dl className="facts">
        <div><dt>Products live</dt><dd>{liveCount}</dd></div>
        <div><dt>Production APIs</dt><dd>{apiCount}</dd></div>
        <div><dt>API modules written</dt><dd>{moduleCount}+</dd></div>
        <div><dt>Years building</dt><dd>1+</dd></div>
      </dl>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((k) => (
            <span key={k}>
              {tickerModules.map((m) => (
                <code key={m}>{m}</code>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
