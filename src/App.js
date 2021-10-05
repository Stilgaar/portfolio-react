
import { useState } from 'react';
import './App.css';
import GrosElem from './Components/GrosElem/GrosElem';
import Navigation from './Components/Navbar/Navigation';

function App() {

  const [afficher, setAfficher] = useState(false);

  const afficherElement = ((afficher) => {
    if (setAfficher == true)
    setAfficher(...afficher(true))
    console.log("côté l'app")
  })

  return (
    <div>

      <Navigation />

      {afficher &&
      <GrosElem composant={() => afficherElement()}/>
      }
    
    </div>
  );
}

export default App;
