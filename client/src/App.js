import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// PAGES
import Home from '../src/pages/Home';
import Signup from '../src/pages/Signup';
import Login from '../src/pages/Login';
import Contact from '../src/pages/Contact';
import About from '../src/pages/About';
import Profile from './pages/Profile';
import Error from '../src/pages/Error';
import Shopping from '../src/pages/Shopping';
import ProductDetails from './pages/ProductDetails';
import SingleDoctorDetails from './pages/SingleDoctorDetails';
import Appointment from './pages/Appointment';



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Shopping/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/appointment' element={<Appointment/>}></Route>
        <Route path='/products/:id' element={<ProductDetails/>}></Route>
        <Route path='/doctor/:id' element={<SingleDoctorDetails/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
