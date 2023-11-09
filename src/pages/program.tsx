import React from 'react'
import Card from '../components/card'
import BannerShort from '../components/banner-short'

export default function Program() {
  return (
    <> 
      <BannerShort 
        title='Our program •' 
        summary='' 
      />
      <Card 
        title='One ' 
        resume='•	Back to school Campaign ' 
      />
      <Card 
        title='Two ' 
        resume='•	Elikiya Education Trust  ' 
      />

      <Card 
        title='Three ' 
        resume='•	Brighter Future Initiative ' 
      />

      <div className='our'>
        <div></div>
      </div>

      <Card 
        title='Four' 
        resume='• Anaweza (She can)' 
      />
    </>
  )
}
