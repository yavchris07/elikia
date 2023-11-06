// import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './pages/about';

function Routing() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/apropos' Component={About} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routing;
