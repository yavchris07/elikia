import React, { useContext, useState } from 'react';
import BannerShort from '../components/banner-short';
import Card from '../components/card';
import '../styles/about.scss'
import { LangContext } from '../context/lang';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
 

export default function About() {
  const { dispatch: { translate }} = useContext(LangContext);
  const [on] = useState<boolean>(false);
  
  return (
    <>
      <Navbar /> 
      <BannerShort 
        title={translate('about')} 
        summary= {translate('')}
      />
      
      <div className='about'>
        <Card 
          title={translate('who')} 
          resume={translate('about-summary')}
          clas='p'
        />
       
        <Card 
          title={translate('vision')}
          resume= {translate('vision-text')} 
          clas='p'
        />

         <Card 
          title={translate('mission')}
          resume={translate('mission-text')}
          clas='p' 
        />
        <div className='vl'>
          <h1>{translate('our-v')}</h1>
          <p>{translate('v')}<span>{translate('vt')}</span></p>
          <p>{translate('v1')}<span>{translate('v1t')}</span></p>
          <p>{translate('v2')}<span>{translate('v2t')}</span></p>
          <p>{translate('v3')}<span>{translate('v3t')}</span></p>
          <p>{translate('v5')}<span>{translate('v5t')}</span></p>
           
        </div>
        <Card 
          title={translate('our-p')}
          resume= {translate('our-p-txt')} 
          clas='p'
        />
        <Card 
          title={translate('bord')}
          resume= {translate('')} 
          clas='p'
        />
      </div>
      

      {/* <div className='our'>
        <div></div>
      </div> */}

      
      <Footer />
    </>
  )
}
