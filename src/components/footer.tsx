import React, { useContext, useState } from 'react';
import Letter from './letter';
import '../styles/footer.scss';
import SUM from '../models/goal-data';
import Summary from '../models/goal';
import { LangContext } from '../context/lang';

export default function Footer() {

  const [sum] = useState<Summary[]>(SUM);
  const { dispatch: { translate }} = useContext(LangContext);
  return (
    <> 
      <Letter />
      <div className='container'>
        {
          sum.map((t) => (
          <div className='card' key={t.id}>
            <h4>{t.title}</h4>
            <p>{t.summary}</p>
          </div>
          ))
        } 
        
      </div>

      <div className='foot'>
        <span>{translate('copyright')}</span>
      </div>
    </>
  )
}
