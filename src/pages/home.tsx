import React, { useContext, useState } from 'react';
import Banner from '../components/banner';
// import CardList from '../components/card-list';
import '../styles/home.scss';
import { LangContext } from '../context/lang';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import LeftCard from '../components/left-card';
import RightCard from '../components/right-card';
 
import { TbSteam } from "react-icons/tb";
import { GiStairsGoal } from "react-icons/gi";
import { LiaLowVisionSolid } from "react-icons/lia";
import log from '../assets/cm.jpg';
import lg from '../assets/logo.png';
import tm from '../assets/team.jpg';
import p from '../assets/p.jpg';
import e from '../assets/e.jpg'

const team = () => {}

export default function Home() {
  const { dispatch: { translate }} = useContext(LangContext);
  
  return (
    <>
      <Navbar />
      <Banner />

      <br />
      <br />
    
      <div className='out'>
       <LeftCard
          pic={tm} 
          title='About us'
          summary={translate('n-about-1').substring(0,320)+'...'}
          root={'/about'}
          bg='green'
        />

        <RightCard
          pic={p}
          title= 'What we do'
          summary={translate('n-about-2').substring(0,300)+'...'}
          root={'/about'}
          bg='#006cd1'
        />

        {/* <div className='in'>
          <div className='p'>
            <img src={log} alt="" />
            <div className='o'></div>
          </div>
          <div className='t'>
            <p>{translate('op')}</p>
            <img src={lg} alt=""  />
            <h3>Elikya Foundation</h3>
          </div>
        </div> */}

      </div>

      <div className='home-about'>
          {/* <div className='card-one'>
            <div className='pi'>
              <TbSteam style={{fontSize:60}}/>
            </div>
             
              <h1>{translate('about-text')}</h1>
              <p>{translate('about-one')}</p>
              <a href="./about">Read more</a>

          </div> */}

          <div className='card-two'>
            <div className='pi'>
              <GiStairsGoal style={{fontSize:60}}/>
            </div>
          
              <h1>{translate('mission')}</h1>
              <p>{translate('mis')}</p>
              <a href="./about">Read more</a>
          </div>

          <div className='card-three'>
            <div className='pi'>
              <LiaLowVisionSolid style={{fontSize:60}}/>
            </div>

              <h1>{translate('vision')}</h1>
              <p>{translate('vision-text')}</p>
              <a href="./about">Read more</a>
          </div>
      </div> 

      <div className='out'>
        <LeftCard
            pic={e} 
            title={translate('two-txt')}
            summary={translate('pro-educ').substring(0,240)+'...'}
            root={'/our-programs'}
            bg='#006cd1'
          /> 
      </div>
         
      <Footer />
    </>
  )
}

