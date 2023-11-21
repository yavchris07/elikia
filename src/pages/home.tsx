import React, { useContext, useState } from 'react';
import Banner from '../components/banner';
// import CardList from '../components/card-list';
import Hcard from '../components/h-card';
import '../styles/home.scss';
import { LangContext } from '../context/lang';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Popup from '../components/popup';
import LeftCard from '../components/left-card';
import RightCard from '../components/rigth-card';

import c1 from '../assets/annie-spratt-0cgpyigyIkM-unsplash.jpg'
import c2 from '../assets/annie-spratt-2INKkSrEmc8-unsplash.jpg';
import c3 from '../assets/annie-spratt-SPS796v4KmM-unsplash.jpg';
import c4 from '../assets/ecole.jpg';
import BannerShort from '../components/banner-short';

import { TbSteam } from "react-icons/tb";
import { GiStairsGoal } from "react-icons/gi";
import { LiaLowVisionSolid } from "react-icons/lia";


export default function Home() {
  const { dispatch: { translate }} = useContext(LangContext);
  const [button] = useState<boolean>(false);
  
  return (
    <>
      <Navbar />
      <Banner /> 
       {/* <div className='out'>
       <LeftCard img={c3}/>
        <RightCard img={c2}/>
       </div>
      
      <BannerShort title={'Elikia'} summary={translate('about-summary')} />

      <div className='out-1'>
        <LeftCard img={c1}/>
        <RightCard img={c4}/>
      </div> */}

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
       <LeftCard img={c3}/>
        <RightCard img={c2}/>
      </div>
      
      {/* <BannerShort title={'Elikia'} summary={translate('about-summary')} /> */}

      {/* <div className='out-1'>
        <LeftCard img={c1}/>
        <RightCard img={c4}/>
      </div> */}
     

        {/* <Popup trigger={button}>
          <h3>Subscribe</h3>
          <p>This where you'll subscribe to join us</p>
        </Popup> */}
           
    <Footer button={button}/>
    </>
  )
}

