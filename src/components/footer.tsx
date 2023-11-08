import React, { useState } from 'react';
import Letter from './letter';
import '../styles/footer.scss';
import SUM from '../models/goal-data';
import Summary from '../models/goal';

export default function Footer() {

  const [sum] = useState<Summary[]>(SUM);
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
        <span>© 2023 | Elikia foundation | Goma - NK</span>
      </div>
    </>
  )
}
