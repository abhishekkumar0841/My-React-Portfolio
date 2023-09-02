import Navbar from "./components/Navbar/Navbar";
import Intro from './components/Intro/Intro'
import Contact from './components/Contact/Contact'
import Testimonial from './components/Testimonial/Testimonial'
import './App.scss'
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 
      <div className="sections">
        <Intro/>
        {/* <Portfolio/>  */}
        <Skills/>
        {/* <Works/>   */}
        <Projects/>
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
