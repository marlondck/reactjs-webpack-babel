import React, { useState } from "react";
import './App.css';
import img from './assets/dana-ward-b8FGRN-t34M-unsplash.jpg';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['Dev de App', 'Front-end web'])

  function handleAddProjet() {
    setProjects([...projects, 'novo valor'])
    console.log(projects)
  }

  return (
    <>
     <Header title="Home page"/>
      <ul>
        { projects.map(project => {
          return <li key={project}>{project}</li>
        }) }
      </ul>

      <br />

        <img src={img} width="120" />

      <br />

      <button type="button" onClick={handleAddProjet}>Adicionar</button>
    </>
  )
  
}

export default  App;