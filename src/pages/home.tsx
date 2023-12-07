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


export default function Home() {
  const { dispatch: { translate }} = useContext(LangContext);
  
  return (
    <>
      <Navbar />
      <Banner />

      <div className='slogan'>
        <p>{translate('slogan')}</p>
        <p>{translate('slogan1')}</p>
        <h5>Elikya Foundation </h5>
      </div>

      <div className='home-about'>
          <div className='card-one'>
            <div className='pi'>
              <TbSteam style={{fontSize:60}}/>
            </div>
             
              <h1>{translate('about-text')}</h1>
              <p>{translate('about-one')}</p>
              <a href="./about">Read more</a>

          </div>

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
          title={translate('programme')} 
          brnck={translate('education')} 
          subtitle={translate('one-txt')} 
          summary={translate('pro-educ').substring(0,320)+'...'}
          root={'/our-programs'}
        />
        <RightCard
         title={translate('invol')} 
         brnck={translate('join')} 
         subtitle={translate('vol')} 
         summary={translate('vol-txt').substring(0,320)+'...'}
         root={'/get-involved'}
        />

        <div className='in'>
          <div className='p'>
            <img src={log} alt="" />
            <div className='o'></div>
          </div>
          <div className='t'>
            <p>{translate('op')}</p>
            <img src={lg} alt=""  />
            <h3>Elikya Foundation</h3>
          </div>
        </div>

         <LeftCard 
            title={translate('invol')} 
            brnck={translate('join')}  
            subtitle={translate('partner')} 
            summary={translate('pt-txt').substring(0,320)+'...'}
            root={'/get-involved'}
          />
      </div>
         
      <Footer />
    </>
  )
}

