
import { useEffect, useState } from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Navigation from './Components/Navbar/Navigation';

function App() {

  const [afficher, setAfficher] = useState(false);

  const afficherElement = (() => {
    setAfficher(current => !current)
  })

  useEffect(() => {
    console.log(afficher)
  }, [afficher]
  )

  return (
    <div>
      <Navigation composant={afficherElement}/>
      {/* ternaire plus plus */}
       { afficher &&
        <Main /> }
    </div>
  );
}

export default App;
