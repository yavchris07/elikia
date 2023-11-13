import React, { useContext } from 'react'
import Card from '../components/card'
import BannerShort from '../components/banner-short'
import { LangContext } from '../context/lang';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function Program() {
  const { dispatch: { translate }} = useContext(LangContext);
  
  return (
    <>
      <Navbar /> 
      <BannerShort 
        title={translate('prog')} 
        summary='' 
      />
      <Card 
        title={translate('one')}
        resume={translate('one-txt')} 
      />
      <Card 
        title={translate('two')}
        resume={translate('two-txt')}
      />

      <Card 
        title={translate('three')}
        resume={translate('three-txt')} 
      />

      {/* <div className='our'>
        <div></div>
      </div> */}

      <Card 
       title={translate('four')}
       resume={translate('four-txt')} 
      />
      <Footer />
    </>
  )
}
