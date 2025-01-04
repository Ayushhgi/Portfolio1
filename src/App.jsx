import { useState } from 'react'
import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import { Portfolio } from './components/Portfolio';
import Experience from './components/Experience';
import TravelForm from './components/TravelForm';


function App() {
  return (
      <div>
       <NavBar/>
       <Home/>
       <About/>
       <Portfolio/>
       <Experience/>
       <TravelForm/>

       <SocialLinks/>
      </div>
  )
}

export default App
