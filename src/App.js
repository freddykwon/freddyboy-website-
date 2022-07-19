import React from 'react';
import Navigation from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import 'bulma/css/bulma.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage';
import Music from './components/pages/MusicPage';
import Merch from './components/pages/MerchPage';
import About from './components/pages/About';
import Contact from './components/pages/ContactPage';
import SideWork from './components/pages/OtherWorks';


const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/music' element={<Music />} />
          <Route path='/merch' element={<Merch />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/otherworks' element={<SideWork />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;