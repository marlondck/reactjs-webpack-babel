import React, { useState } from "react";
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

      <button type="button" onClick={handleAddProjet}>Adicionar</button>
    </>
  )
  
}

export default  App;