import React from 'react';
import BannerShort from '../components/banner-short';
import { MdOutlineDownloading } from 'react-icons/md';
import Card from '../components/card';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


export default function Donate() {
  return (
    <>
      <Navbar />
      <BannerShort 
        title='Donate'
        summary=''
      />
      <Card 
          title='' 
          resume='Web site under construction :( ' 
      />
        <MdOutlineDownloading />
      <Footer />
    </>
  )
}
