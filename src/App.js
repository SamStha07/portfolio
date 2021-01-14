import LandingPage from './pages/Landing/LandingPage';
import Header from './components/Header/Header';
import Skill from './pages/Skills/SkillPage';
import Project from './pages/Projects/ProjectPage';
import Contact from './pages/Contact/ContactPage';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <LandingPage />

      <Skill id='section1' />
      <Project id='section2' />

      <Contact id='section3' />
    </Router>
  );
}

export default App;
