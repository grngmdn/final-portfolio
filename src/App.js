import React from "react";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav"
import {Home, About, Work, Projects, Education, Contact} from "./pages"

function App() {
  return (
    <div>
      <Nav />
      <section id="home">
        <Home />
      </section>
      <section id="about" >
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
