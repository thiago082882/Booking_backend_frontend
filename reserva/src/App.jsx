import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/hotels' element={<List/>}/>
    <Route path='/hotels/:id' element={<Hotel/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
