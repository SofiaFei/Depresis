import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DiagnosaDepresi from './components/DiagnosaDepresi'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/Diagnosa' exact element={<DiagnosaDepresi/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
