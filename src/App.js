// src/App.jsx
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
   <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Projects />
      <Contact/>
      <Footer/>
      {/* About, Skills, Projects, Contact, Footer will follow */}
    </div>
  );
}

export default App;
