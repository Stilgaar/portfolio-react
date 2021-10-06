
import Main from "./Components/Main/Main";
import Navigation from './Components/Navbar/Navigation';
import { useState } from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";

import Extensions from './Components/Extensions/Extensions';


function App() {




  const [afficher, setAfficher] = useState(false);

  const afficherElement = (() => {
    if (afficher == true) {
      return;
    }
    else {
      setAfficher(current => !current)
    }
  })

  return (
    <div>
      <Router>
        <Navigation composant={afficherElement} />
        <Switch>
          <Route path="/Extensions">
            <Extensions />
          </Route>
        </Switch>
        {afficher &&
        <Route exact
        activeClassName="active"
        path="/">
          <Main exact path = "/"/>
          </Route>
        }
      </Router>

    </div>
  );
}

export default App;
