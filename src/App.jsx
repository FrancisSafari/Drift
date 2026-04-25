import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <HomePage/>
    </BrowserRouter>

  )
}

export default App
