import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Navbar,
  Home,
  Diagnosa,
  Footer
} from "./components";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Diagnosa' element={<Diagnosa />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
