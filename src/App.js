import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import 'bulma/css/bulma.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage';
import Music from './components/pages/MusicPage';
import Merch from './components/pages/MerchPage';
import Contact from './components/pages/ContactPage';


const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/music' element={<Music />} />
          <Route path='/merch' element={<Merch />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;