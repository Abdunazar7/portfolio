import { useEffect, useRef } from 'react'
import { Gallery, Modules, Stack, Status, ProjectLinks } from './ProjectBits.jsx'

export default function ProjectDialog({ project, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (project && !d.open) d.showModal()
    if (!project && d.open) d.close()
  }, [project])

  return (
    <dialog
      ref={ref}
      className="dialog"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="dialog-title"
    >
      {project && (
        <div className="dialog-inner">
          <button className="close" type="button" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
          <div className="meta">
            <Status status={project.status} />
            <span className="year">{project.year}</span>
          </div>
          <h2 id="dialog-title">{project.title}</h2>
          <p className="dialog-lede">{project.summary}</p>
          {project.images?.length > 0 && <Gallery project={project} big key={project.id} />}
          <h3>What it does</h3>
          <ul className="points">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          {project.modules && (
            <>
              <h3>{project.modules.length} backend modules</h3>
              <Modules items={project.modules} />
            </>
          )}
          <h3>Built with</h3>
          <Stack items={project.stack} />
          <ProjectLinks project={project} />
        </div>
      )}
    </dialog>
  )
}
