import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Navbar,
  Home,
  Quiz,
  Footer
} from "./components";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter basename='/~ubuntu/Depresis/'>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Quiz' element={<Quiz />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
