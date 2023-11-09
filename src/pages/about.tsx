import React from 'react';
import BannerShort from '../components/banner-short';
import Card from '../components/card';
import '../styles/about.scss'
 

export default function About() {
  return (
    <> 
      <BannerShort 
        title='About us' 
        summary='a social impact organization focused on helping build thriving and resilient communities in Africa' 
      />
      
      <Card 
        title='Who we are !' 
        resume='Elikiya Foundation is a social impact organization focused on helping build thriving and resilient communities in Africa. We believe that investing in Human Capital can help build thriving individuals, communities, and sustainable Livelihoods.' 
        />
        <Card 
        title='Our mission and Values ' 
        resume='Elikiya Foundation’s mission is to support underprivileged communities across Africa build brighter futures. ' 
        />

<div className='our'>
         
        <div></div>
      </div>

        <Card 
        title='Our vision' 
        resume='We envision prosperous and thriving communities, where clouds of desperation give way to new lights of hope.' 
        />
    </>
  )
}
