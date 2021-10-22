import React from "react";
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <>
     <Header title="Home page"/>
      <Menu>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
        </ul>
      </Menu>
    </>
  )
  
}

export default  App;