import React, { useContext } from 'react';
import Banner from '../components/banner';
// import CardList from '../components/card-list';
import Hcard from '../components/h-card';
import '../styles/home.scss';
import { LangContext } from '../context/lang';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import c1 from '../assets/annie-spratt-0cgpyigyIkM-unsplash.jpg';
import c2 from '../assets/annie-spratt-2INKkSrEmc8-unsplash.jpg';
import c3 from '../assets/annie-spratt-SPS796v4KmM-unsplash.jpg';
import c4 from '../assets/ecole.jpg';
import c5 from '../assets/volu.jpg'


export default function Home() {
  const { dispatch: { translate }} = useContext(LangContext);
  
  return (
    <>
      <Navbar />
      <Banner /> 
       
      <div className='containers'>

        <div>
          <h1>{translate('title-1')}</h1>
          <span>Helping write new stories of hope</span>
        </div>
   
        <div className='list'>
          <Hcard 
            photo={c1}
            />
          <Hcard 
            photo={c2}
            />
          <Hcard
            photo={c3}
          />
        </div>
      </div> 

      <div className='containers'>
        <div>
          <h1>{translate('title')}</h1>
          <span>Helping communities</span>
        </div>
   

        <div className='list'>
          <Hcard 
            photo={c4}
          />
          <Hcard 
            photo={c5}
          />
        </div>
      </div> 
            
    <Footer />
    </>
  )
}

