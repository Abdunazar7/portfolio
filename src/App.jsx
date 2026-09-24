import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import SelectedWork from './components/SelectedWork.jsx'
import AllProjects from './components/AllProjects.jsx'
import ProjectDialog from './components/ProjectDialog.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import ScrollTop from './components/ScrollTop.jsx'
import { projects } from './data/projects.js'

export default function App() {
  const [openId, setOpenId] = useState(null)
  const open = projects.find((p) => p.id === openId) || null

  return (
    <div className="wrap">
      <Header />
      <main>
        <Hero />
        <SelectedWork onOpen={setOpenId} />
        <AllProjects onOpen={setOpenId} />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <ProjectDialog project={open} onClose={() => setOpenId(null)} />
      <ScrollTop />
    </div>
  )
}
