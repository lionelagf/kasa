import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Housing from '../pages/Housing'
import About from '../pages/About'
import Header from './Header'
import Error from './Error'
import Footer from './Footer'

function KasaRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logement/:id' element={<Housing />} />
        <Route path='/a-propos' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default KasaRouter
