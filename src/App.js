import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Extensions from './Components/Extensions/Extensions';
import Main from "./Components/Main/Main";
import Navigation from './Components/Navbar/Navigation';

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
