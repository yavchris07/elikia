import React, { useContext } from 'react'
import { LangContext } from '../context/lang';

export default function Letter() {
  const { dispatch: { translate }} = useContext(LangContext);
  
  return (
    <div className='letter'> 
        <div className='dot'>
            <div className='dot-one'></div>
            <div className='dot-two'></div>
            <div className='dot-three'></div>
        </div>
        <div className='input'>
            <div>
                <h3>{translate('letter-text')}</h3>
                <span>{translate('spam')}</span>
            </div>
            <button type="button">{translate('sub')}</button>
        </div>
    </div>
  )
}
