
import { useEffect, useState } from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Navigation from './Components/Navbar/Navigation';

function App() {

  const [afficher, setAfficher] = useState(false);

<<<<<<< HEAD
  const afficherElement = (() => {
    setAfficher(current => !current)
=======
  const afficherElement = ((afficher) => {
    if (setAfficher == true)
    setAfficher(...afficher(true))
    console.log("côté l'app")
>>>>>>> e6ff523f790b4b39a590763b98fe0aa627371c39
  })

  useEffect(() => {
    console.log(afficher)
  }, [afficher]
  )

  return (
    <div>
<<<<<<< HEAD
      <Navigation composant={afficherElement}/>
      {/* ternaire plus plus */}
       { afficher &&
        <Main /> }
=======

      <Navigation />

      {afficher &&
      <GrosElem composant={() => afficherElement()}/>
      }
    
>>>>>>> e6ff523f790b4b39a590763b98fe0aa627371c39
    </div>
  );
}

export default App;
