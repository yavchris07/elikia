import React, { useContext } from 'react';
import Banner from '../components/banner';
// import CardList from '../components/card-list';
import Hcard from '../components/h-card';
import '../styles/home.scss';
import { LangContext } from '../context/lang';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
// import v1 from '../assets/vik 2.jpg';
// import ph from '../assets/phyz.jpg';
import en from '../assets/en.jpg';
import sk from '../assets/skol.jpg';
import st from '../assets/study.jpg';

import mto from '../assets/kwetu.jpg';
import pt from '../assets/petit.jpg';
import mama from '../assets/mama.jpg';

import mac from '../assets/mac.jpg';
import mach from '../assets/mach.jpg';
import kwetu from '../assets/mto.jpg';
import bat from '../assets/bat.jpg';

export default function Home() {
  const { dispatch: { translate }} = useContext(LangContext);
  
  return (
    <>
    <Navbar />
      <Banner /> 
      {/* <CardList /> */}
      <div className='cont'>
        <div>
          <h1>Book helping</h1>
          <span>Helping write new stories of hope</span>
        </div>

        <div className='list'>
          <Hcard 
            title='Book of leadership' 
            type='Elikia book helping'
            photo={sk}
            />
          <Hcard 
            title='Les réalités de la vie' 
            type='Elikia book helping'
            photo={en}
            />
          <Hcard 
            title='La clé, Education' 
            type='Elikia book helping'
            photo={st}
          />
        </div>
       
        {/* <Hcard />
        <Hcard /> */}
      </div>

      <div className='cont'>
        <div>
          <h1>Science helping</h1>
          <span>Helping write new stories of hope</span>
        </div>

        <div className='list'>
          
          <Hcard 
            title='La culture' 
            type='Elikia book helping'
            photo={mto}
          />
          <Hcard 
            title='Comment entreprendre ?' 
            type='Elikia book helping'
            photo={mac}
          />
          <Hcard 
            title='La nutrition' 
            type='Elikia book helping'
            photo={pt}
          />
        </div>
       
        {/* <Hcard />
        <Hcard /> */}
      </div>


    <div className='out'>
      <div>
        <h1>{translate('helping')}</h1>
        <p>{translate('slogan')}</p>
      </div>
    </div>
      

    <div className='cont'>
        <div>
          <h1>Eduction helping</h1>
          <span>Helping write new stories of hope</span>
        </div>

        <div className='list'>
          <Hcard 
            title='La vie, une mère' 
            type='Elikia book helping'
            photo={mama}
            />
          <Hcard 
            title='History, la guerre !' 
            type='Elikia book helping'
            photo={bat}
            />
          <Hcard 
            title=' The entertainment' 
            type='Elikia book helping'
            photo={kwetu}
          />
        </div>
       
        {/* <Hcard />
        <Hcard /> */}
      </div>
    <Footer />
    </>
  )
}

