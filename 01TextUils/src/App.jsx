import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'

function App() {
  return (
  <>
    <Navbar title="TextUils" aboutText="About us"/>
    <div className="container my-3">
    <Textform heading="Enter the text analyze below"/>
    </div>
  </>
  )
}

export default App
