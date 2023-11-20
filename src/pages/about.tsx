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
        // path='• Home • about'
        title={translate('who')} 
        summary= {translate('about-summary')}
      />
      <div className='about'>
        <Card 
          title={translate('who')} 
          resume={translate('who-text')}
          clas='p'
        />
        <Card 
          title={translate('mission')}
          resume={translate('mission-text')}
          clas='p' 
        />
        <Card 
          title={translate('vision')}
          resume= {translate('vision-text')} 
          clas='p'
        />
      </div>
      

      {/* <div className='our'>
        <div></div>
      </div> */}

      
      <Footer button={on}/>
    </>
  )
}
