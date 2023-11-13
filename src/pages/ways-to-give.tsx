import React, { useContext } from 'react'
import BannerShort from '../components/banner-short'
import Card from '../components/card'
import {MdOutlineDownloading} from 'react-icons/md'
import { LangContext } from '../context/lang';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import airtel from '../assets/air.png';
import voda from '../assets/vod.png';
import afri from '../assets/africel.jpg';
import orange from '../assets/orange.jpg';
import '../styles/way.scss';

export default function WaysToGive() {
  const { dispatch: { translate }} = useContext(LangContext);
  
  return (
    <>
      <Navbar />
      <BannerShort title={translate('way')} summary=''/>
      <Card 
        title='' 
        resume={translate('site')}   
      />
      <div className='pay'>
        <div>
          <img src={airtel} alt="" />
        </div>
        <div>
          <img src={afri} alt="" />
        </div>
        <div>
          <img src={orange} alt="" />
        </div>
        <div>
          <img src={voda} alt="" />
        </div>
      </div>
      {/* <MdOutlineDownloading /> */}
      
      <Footer />
    </>
  )
}
