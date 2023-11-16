import React, { useContext } from 'react'
import Card from '../components/card'
import BannerShort from '../components/banner-short'
import { LangContext } from '../context/lang';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
// const styles = '../styles/pro.scss';
import { MdVolunteerActivism } from "react-icons/md";
import { MdRememberMe } from "react-icons/md";
import '../styles/pro.scss'

export default function Program() {
  const { dispatch: { translate }} = useContext(LangContext);
  
  return (
    <>
      <Navbar /> 
      <BannerShort 
        title={translate('prog')} 
        summary='' 
      />
      <div className='pro'>
        {/* <Card 
          title={translate('one')}
          resume={translate('one-txt')}
          clas='p'
        />
        <Card 
          title={translate('two')}
          resume={translate('two-txt')}
          clas='p'
        />

        <Card 
          title={translate('three')}
          resume={translate('three-txt')}
          clas='p'
        />
        <Card 
          title={translate('four')}
          resume={translate('four-txt')}
         clas='p'
        /> */}

        <Card 
        title={''} 
        resume={translate('one-txt')} 
        icon={<MdVolunteerActivism />}
        clas='kart'
      />
      <Card 
        title={''} 
        resume={translate('two-txt')} 
        icon={<MdRememberMe />}
        clas='kart'
      />
      </div>
     

      {/* <div className='our'>
        <div></div>
      </div> */}

     
      <Footer />
    </>
  )
}
