import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import LiveCourseDetails from './pages/LiveCourseDetails/LiveCourseDetails';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/details'>
          <LiveCourseDetails />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
