import React, { useContext } from 'react';
import BannerShort from '../components/banner-short';
import Card from '../components/card';
import '../styles/about.scss'
import { LangContext } from '../context/lang';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
 

export default function About() {
  const { dispatch: { translate }} = useContext(LangContext);
  
  return (
    <>
      <Navbar /> 
      <BannerShort 
        // path='• Home • about'
        title={translate('who')} 
        summary= {translate('about-summary')}
      />
      
      <Card 
        title={translate('who')} 
        resume={translate('who-text')} 
      />
      <Card 
        title={translate('mission')}
        resume={translate('mission-text')} 
      />

      {/* <div className='our'>
        <div></div>
      </div> */}

      <Card 
        title={translate('vision')}
        resume= {translate('vision-text')} 
      />
      <Footer />
    </>
  )
}
