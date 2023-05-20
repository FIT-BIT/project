import React from 'react'
import Auth from './page/Auth'
import { Routes, Route } from 'react-router-dom';
import Index from './page/Index';
import About from './page/About';
import Contact from './page/Contact';
import Profile from './page/Profile';
import CreateRoutine from './page/Admin/CreateRoutine';

import Test from './page/Test';
import Dashboard from './page/Admin/Dashboard';

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/auth/:login' element={<Auth />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/createroutine' element={<CreateRoutine />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='/test' element={<Test />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App