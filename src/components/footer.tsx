import React, { useContext, useState } from 'react';
import Letter from './letter';
import '../styles/footer.scss';
import { LangContext } from '../context/lang';
import FooterCard from './footer-card';

interface footProps{
  button:boolean
}
export default function Footer({button}:footProps) {

  // const [sum] = useState<Summary[]>(SUM);
  const { dispatch: { translate }} = useContext(LangContext);

  return (
    <> 
      <Letter button={button}/>
      <div className='container'> 
        {/* Who we are */}
        <FooterCard
          title={translate('who')}
          summary={translate('who-text')} 
        />
        {/* our mission */}
        <FooterCard
          title={translate('mission')}
          summary={translate('mission-text')} 
        />
        {/* our vision */}
         <FooterCard
          title={translate('vision')}
          summary={translate('vision-text')} 
        />
           {/* <FooterCard
          title={translate('prog')}
          summary={translate('pro-text')} 
        /> */}
      </div>

      <div className='foot'>
        <span>{translate('copyright')}</span>
      </div>
    </>
  )
}
