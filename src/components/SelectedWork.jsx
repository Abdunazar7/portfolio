import { projects } from '../data/projects.js'
import { Gallery, Stack, Status, ProjectLinks } from './ProjectBits.jsx'

export default function SelectedWork({ onOpen }) {
  const featured = projects.filter((p) => p.featured)
  return (
    <section id="work" aria-labelledby="work-h">
      <div className="head">
        <h2 id="work-h">Selected work</h2>
        <p>Products that real people log into. Each one covers the whole path, from database schema to deployed UI.</p>
      </div>

      <div className="featured">
        {featured.map((p, idx) => (
          <article className={`feature ${idx % 2 ? 'flip' : ''}`} key={p.id}>
            <Gallery project={p} big />
            <div className="feature-body">
              <div className="meta">
                <Status status={p.status} />
                <span className="year">{p.year}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <ul className="points">
                {p.highlights.slice(0, 3).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <Stack items={p.stack} />
              <ProjectLinks project={p} />
              <button className="details" type="button" onClick={() => onOpen(p.id)}>
                See all details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
