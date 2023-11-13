import React, { useContext } from 'react'
import BannerShort from '../components/banner-short'
import Card from '../components/card'
import {MdOutlineDownloading} from 'react-icons/md'
import { LangContext } from '../context/lang';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

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
      <MdOutlineDownloading />
      <Footer />
    </>
  )
}
