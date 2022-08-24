import './App.css';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import About from './components/projects/about/About';
import Project from './components/projects/Project';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
