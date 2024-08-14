import { About, Contact, Experience, Hero, Navbar, Works, ParticlesCanvas } from "../components";

const HomePage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Works />
      <div className="relative z-0">
        <Contact />
      </div>
      <ParticlesCanvas />
    </div>
  );
};

export default HomePage;
