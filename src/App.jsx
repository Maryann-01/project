import './App.css'
import React from 'react'
import {Routes,Route} from "react-router-dom"
import AboutUs from './components/AboutUs/AboutUs'
import Home from "./components/Home"
import ScrollToTopArrow from './components/ScrollToTopArrow/ScrollToTopArrow'

function App() {
  return (
    <>
       <Routes>
        <Route index element={<Home/> }/>
        <Route path ="/home" element={<Home/> }/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
       </Routes>
    </>
  )
}

export default App
