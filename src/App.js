import './App.css';
import React from 'react'

// importamos páginas
import Login from "./pages/Login.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavbarComponent from './helpers/Navbar.js';

function App() {
  return(
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path='/*' element={<NavbarComponent />}></Route>
        </Routes>
      </Router>
  )
}
export default App