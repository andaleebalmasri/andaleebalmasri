import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx";
import Header from "./Header.jsx";  
import Hero from "./Hero.jsx";
import CardsList from "./components/CardsList";


function App() {
  return (
    <div>
      <h1>Mini React Cards App</h1>
      <CardsList />
    </div>
  );
}

export default App;