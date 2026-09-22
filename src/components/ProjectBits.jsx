import { useState } from 'react'

const statusText = {
  live: 'Live',
  released: 'Released',
  'in-progress': 'In progress',
  code: 'Source on GitHub',
}

export function Status({ status }) {
  return <span className={`status-tag s-${status}`}>{statusText[status] || status}</span>
}

export function Stack({ items }) {
  return (
    <ul className="stack">
      {items.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  )
}

export function Modules({ items, limit }) {
  const shown = limit ? items.slice(0, limit) : items
  const rest = items.length - shown.length
  return (
    <ul className="mods">
      {shown.map((m) => (
        <li key={m}>{m}</li>
      ))}
      {rest > 0 && <li className="more-mods">+{rest} more</li>}
    </ul>
  )
}

export function ProjectLinks({ project }) {
  return (
    <div className="actions">
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener">
          Open the site
        </a>
      )}
      {(project.links || []).map((l) => (
        <a key={l.url} href={l.url} target="_blank" rel="noopener">
          {l.label}
        </a>
      ))}
      {(project.repos || []).map((r) => (
        <a key={r.url} href={r.url} target="_blank" rel="noopener">
          {r.label === 'Code' ? 'Code' : `${r.label}`}
        </a>
      ))}
    </div>
  )
}

// Screenshot with thumbnails. If there are no images, shows the module map
// or the first highlights instead, so every card still has a visual.
export function Gallery({ project, big }) {
  const [i, setI] = useState(0)
  const imgs = project.images || []

  if (!imgs.length && project.mock === 'tablet') return <TabletMock />

  if (!imgs.length) {
    return (
      <div className={`gallery empty ${big ? 'big' : ''}`}>
        {project.modules ? (
          <>
            <p className="mods-cap">{project.modules.length} modules</p>
            <Modules items={project.modules} limit={big ? 40 : 12} />
          </>
        ) : (
          <ul className="gallery-points">
            {project.highlights.slice(0, 3).map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  return (
    <div className={`gallery ${big ? 'big' : ''}`}>
      <div className="shot">
        <img src={imgs[i].src} alt={imgs[i].alt} loading="lazy" />
      </div>
      {imgs.length > 1 && (
        <div className="thumbs" role="group" aria-label={`${project.title} screenshots`}>
          {imgs.map((img, k) => (
            <button
              key={img.src}
              type="button"
              className={k === i ? 'on' : ''}
              aria-pressed={k === i}
              aria-label={`Show screenshot ${k + 1}: ${img.alt}`}
              onClick={() => setI(k)}
            >
              <img src={img.src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// Drawn stand-in for a wall-tablet app until real photos are added.
// Remove `mock: 'tablet'` from the project once it has images.
const rooms = [
  { name: 'Living room', t: '22.5°', on: true },
  { name: 'Kitchen', t: '23.1°', on: true },
  { name: 'Bedroom', t: '21.0°', on: false },
  { name: 'Kids room', t: '21.8°', on: false },
  { name: 'Bathroom', t: '24.2°', on: true },
  { name: 'Hall', t: '22.0°', on: false },
]

export function TabletMock() {
  return (
    <figure className="tablet" aria-label="Sketch of the BMS Tablet home screen">
      <div className="tablet-screen">
        <div className="tb-top">
          <strong>18:42</strong>
          <span>Tuesday</span>
        </div>
        <div className="tb-stats">
          <span><b>22.4°</b> Inside</span>
          <span><b>41%</b> Humidity</span>
          <span><b>3</b> Lights on</span>
          <span className="tb-off">Turn everything off</span>
        </div>
        <div className="tb-rooms">
          {rooms.map((r) => (
            <div key={r.name} className={r.on ? 'on' : ''}>
              <span>{r.name}</span>
              <b>{r.t}</b>
              <i aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
      <figcaption>Sketch of the home screen. Photos coming soon.</figcaption>
    </figure>
  )
}
