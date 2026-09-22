import { education, certificates } from '../data/education.js'

export default function Education() {
  const certs = certificates.filter((c) => c.file)
  return (
    <section id="education" aria-labelledby="edu-h">
      <div className="head">
        <h2 id="edu-h">Education</h2>
        <p>An economics degree for how businesses work, plus eleven and a half months of intensive bootcamps for how to build them.</p>
      </div>
      <div className="edu">
        {education.map((e) => (
          <article key={e.program}>
            <p className="when">{e.start} to {e.end}</p>
            <h3>{e.program}</h3>
            <p className="school">
              {e.school}, <span>{e.kind}</span>
            </p>
            <p>{e.note}</p>
          </article>
        ))}
      </div>

      {certs.length > 0 && (
        <div className="certs">
          <h3>Certificates</h3>
          <div className="cert-grid">
            {certs.map((c) => (
              <a key={c.title} className="cert" href={c.file} target="_blank" rel="noopener">
                {/\.pdf$/i.test(c.file) ? (
                  <div className="cert-pdf">PDF</div>
                ) : (
                  <img src={c.file} alt={`${c.title} certificate`} loading="lazy" />
                )}
                <strong>{c.title}</strong>
                <span>{c.issuer}, {c.date}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
