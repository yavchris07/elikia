import React, { useContext } from 'react'
import BannerShort from '../components/banner-short'
import Card from '../components/card'
import {MdOutlineDownloading} from 'react-icons/md'
import { LangContext } from '../context/lang';

export default function WaysToGive() {
  const { dispatch: { translate }} = useContext(LangContext);
  
  return (
    <>
      <BannerShort title={translate('way')} summary=''/>
      <Card 
        title='' 
        resume={translate('site')}   
      />
      <MdOutlineDownloading />
    </>
  )
}
