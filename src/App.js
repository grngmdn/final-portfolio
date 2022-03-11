import React from "react";
import Nav from "./layout/Nav"
import {Home, About, Work, Projects, Education, Contact} from "./pages"

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Work />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
