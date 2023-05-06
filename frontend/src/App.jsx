import React from 'react'
import Navbar from './components/Navbar'
import Auth from './page/Auth'
import { Routes, Route } from 'react-router-dom';
import Index from './page/Index';
import Footer from './components/Footer';
import About from './page/About';
import Contact from './page/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/auth/:login' element={<Auth />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App