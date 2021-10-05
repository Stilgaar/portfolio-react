
import { useState } from 'react';
import './App.css';
import GrosElem from './Components/GrosElem/GrosElem';
import Navigation from './Components/Navbar/Navigation';

function App() {

  const [afficher, setAfficher] = useState(false);

  const afficherElement = (() => {
    if (setAfficher == true)
      (afficher = true)
  })

  return (
    <div>

      <Navigation />

      {/* ternaire plus plus */}
      {afficher &&
        <GrosElem composant={afficherElement()} />
      }
    
    </div>
  );
}

export default App;
