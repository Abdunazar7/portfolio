import { useState } from 'react'
import { projects, categories } from '../data/projects.js'
import { Modules, Stack, Status } from './ProjectBits.jsx'

export default function AllProjects({ onOpen }) {
  const [cat, setCat] = useState('all')
  // Cards with screenshots first, then the rest in data order.
  const list = projects
    .filter((p) => !p.featured && (cat === 'all' || p.category === cat))
    .sort((a, b) => (b.images?.length ? 1 : 0) - (a.images?.length ? 1 : 0))
  const counts = Object.fromEntries(
    categories.map((c) => [c.id, projects.filter((p) => !p.featured && (c.id === 'all' || p.category === c.id)).length]),
  )

  return (
    <section id="projects" aria-labelledby="projects-h">
      <div className="head">
        <h2 id="projects-h">More projects</h2>
        <p>Most of my backend work has no screen to show, so those cards show what the API is made of instead: its real module list.</p>
      </div>

      <div className="filters" role="tablist" aria-label="Filter projects">
        {categories
          .filter((c) => counts[c.id] > 0)
          .map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={cat === c.id}
              className={cat === c.id ? 'on' : ''}
              onClick={() => setCat(c.id)}
            >
              {c.label} <span>{counts[c.id]}</span>
            </button>
          ))}
      </div>

      <div className="grid">
        {list.map((p) => (
          <article className="card" key={p.id}>
            <button className="card-hit" type="button" onClick={() => onOpen(p.id)} aria-label={`Open ${p.title} details`} />
            {p.images?.length ? (
              <div className="card-shot">
                <img src={p.images[0].src} alt="" loading="lazy" />
              </div>
            ) : null}
            <div className="card-body">
              <div className="meta">
                <Status status={p.status} />
                <span className="year">{p.year}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              {!p.images?.length && p.modules && <Modules items={p.modules} limit={9} />}
              <Stack items={p.stack} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
