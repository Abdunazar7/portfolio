import { skills, profile } from '../data/profile.js'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-h">
      <div className="head">
        <h2 id="skills-h">Tools I use</h2>
        <ul className="langs" aria-label="Languages">
          {profile.languages.map((l) => (
            <li key={l.name}>
              <strong>{l.name}</strong> {l.level.toLowerCase()}
            </li>
          ))}
        </ul>
      </div>
      <div className="skills">
        {skills.map((g) => (
          <div key={g.group}>
            <h3>{g.group}</h3>
            <ul>
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
