import React, { useState } from 'react';
import About from './components/About';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeRouter from './routes/HomeRouter';
import Contacts from './components/Contacts';
import Services from './components/Services';
import Projects from './components/Projects';
import AllServices from './components/AllServices';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {

  // modal options

  const [showModal, setShowModal] = useState(false);

  function changeModal() {
    setShowModal(!showModal)
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomeRouter />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<AllServices />} />
        <Route path='/services/:id' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts changeModal={changeModal} />} />
      </Routes>
      {showModal &&
        <Modal changeModal={changeModal} />
      }
      <Footer />
    </BrowserRouter>
  );
};

export default App;