import React, { useContext, useState } from 'react';
import Letter from './letter';
import '../styles/footer.scss';
// import SUM from '../models/goal-data';
// import Summary from '../models/goal';
import { LangContext } from '../context/lang';
import FooterCard from './footer-card';

export default function Footer() {

  // const [sum] = useState<Summary[]>(SUM);
  const { dispatch: { translate }} = useContext(LangContext);
  return (
    <> 
      <Letter />
      <div className='container'> 
        {/* Who we are */}
        <FooterCard
          title={translate('who')}
          summary={translate('who-text')} 
        />
        <FooterCard
          title={translate('mission')}
          summary={translate('mission-text')} 
        />
         <FooterCard
          title={translate('vision')}
          summary={translate('vision-text')} 
        />
           <FooterCard
          title={translate('prog')}
          summary={translate('pro-text')} 
        />
      </div>

      <div className='foot'>
        <span>{translate('copyright')}</span>
      </div>
    </>
  )
}
