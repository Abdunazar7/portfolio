import { profile } from '../data/profile.js'
import { GitHubIcon, TelegramIcon, LinkedInIcon, DownloadIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <>
      <section className="contact" id="contact" aria-labelledby="contact-h">
        <h2 id="contact-h">Need an API that holds up?</h2>
        <p>{profile.available}. Telegram gets the fastest reply.</p>
        <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="links">
          <a className="btn primary" href={profile.links.telegram} target="_blank" rel="noopener">
            <TelegramIcon /> Message on Telegram
          </a>
          <a className="btn" href={profile.links.github} target="_blank" rel="noopener"><GitHubIcon /> GitHub</a>
          <a className="btn" href={profile.links.linkedin} target="_blank" rel="noopener"><LinkedInIcon /> LinkedIn</a>
          <a className="btn" href={profile.cv} download><DownloadIcon /> Download CV</a>
        </div>
      </section>
      <footer>
        <span>{profile.firstName} {profile.lastName}, {profile.location}</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  )
}
