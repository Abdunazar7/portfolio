import { experience } from '../data/experience.js'
import { Stack } from './ProjectBits.jsx'

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-h">
      <div className="head">
        <h2 id="exp-h">Experience</h2>
        <p>Over a year of shipping software for clients, an education company and a smart-building team, often all at once.</p>
      </div>
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.company + e.role}>
            <div className="when">
              <span>{e.start} to {e.end}</span>
              {e.end === 'Present' && <span className="now">Current</span>}
            </div>
            <div className="what">
              <h3>{e.role}</h3>
              <p className="sub">
                <strong>{e.company}</strong>, {e.type}
              </p>
              <ul className="points">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Stack items={e.stack} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
