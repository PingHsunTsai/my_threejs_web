import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, StudyExperience, Hero, Navbar, Works, ParticlesCanvas } from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <StudyExperience />
        {/* <Tech /> */}
        <Works />
        <div className="reletive z-0">
          <Contact />
          <ParticlesCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
