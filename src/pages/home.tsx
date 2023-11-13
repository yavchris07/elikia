import React, { useContext } from 'react';
import Banner from '../components/banner';
// import CardList from '../components/card-list';
import Hcard from '../components/h-card';
import '../styles/home.scss';
import { LangContext } from '../context/lang';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import v from '../assets/vik 1.jpg';
import v1 from '../assets/vik 2.jpg';
import bk2 from '../assets/bk 2.jpg';
import carabean from '../assets/carabean.jpg'
import is from '../assets/island.jpg'
import hugo from '../assets/bk 1.jpg';
import geo from '../assets/geo.jpg';
import mat from '../assets/math.jpg';
import ph from '../assets/phyz.jpg';
import ch from '../assets/chimie.jpg'

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
            title='Book of xxxxxxxxxx' 
            type='Elikia book helping'
            photo={bk2}
            />
          <Hcard 
            title='The Vikings' 
            type='Elikia book helping'
            photo={v}
            />
          <Hcard 
            title='New Carabei' 
            type='Elikia book helping'
            photo={is}
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
            title='Mathmatics' 
            type='Elikia book helping'
            photo={mat}
          />
          <Hcard 
            title='Quatumn physics' 
            type='Elikia book helping'
            photo={ph}
          />
          <Hcard 
            title='Chimistry' 
            type='Elikia book helping'
            photo={ch}
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
            title='Geology' 
            type='Elikia book helping'
            photo={geo}
            />
          <Hcard 
            title='History' 
            type='Elikia book helping'
            photo={v1}
            />
          <Hcard 
            title='French' 
            type='Elikia book helping'
            photo={hugo}
          />
        </div>
       
        {/* <Hcard />
        <Hcard /> */}
      </div>
    <Footer />
    </>
  )
}

