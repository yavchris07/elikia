import React from 'react';
import BannerShort from '../components/banner-short';
import { MdOutlineDownloading } from 'react-icons/md';
import Card from '../components/card';


export default function Donate() {
  return (
    <>
    <BannerShort 
      title='Donate'
      summary=''
    />
    <Card 
        title='' 
        resume='Web site under construction :( ' 
      />
      <MdOutlineDownloading />
    </>
  )
}
