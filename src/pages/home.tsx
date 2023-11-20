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


export default function Home() {
  const { dispatch: { translate }} = useContext(LangContext);
  const [button] = useState<boolean>(false);
  
  return (
    <>
      <Navbar />
      <Banner /> 
       
      <LeftCard img={c3}/>
      <RightCard img={c2}/>

      <BannerShort title={'Elikia'} summary={translate('about-summary')} />
 
      <LeftCard img={c1}/>
      <RightCard img={c4}/>

        <Popup trigger={button}>
          <h3>Subscribe</h3>
          <p>This where you'll subscribe to join us</p>
        </Popup>    
    <Footer button={button}/>
    </>
  )
}

