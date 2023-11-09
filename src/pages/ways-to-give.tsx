import React from 'react'
import BannerShort from '../components/banner-short'
import Card from '../components/card'
import {MdOutlineDownloading} from 'react-icons/md'

export default function WaysToGive() {
  return (
    <>
      <BannerShort title='Way to give' summary=''/>
      <Card 
        title='' 
        resume='Web site under construction :( ' 
      />
      <MdOutlineDownloading />
    </>
  )
}
