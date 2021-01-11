import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Skill from './pages/SkillPage';
import Project from './pages/ProjectPage';
import Contact from './pages/ContactPage';
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
