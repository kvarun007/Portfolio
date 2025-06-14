// src/App.jsx
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Hero />
      <About/>
      <Skills/>
      {/* About, Skills, Projects, Contact, Footer will follow */}
    </div>
  );
}

export default App;
