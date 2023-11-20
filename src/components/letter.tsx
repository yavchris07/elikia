import React, { useContext, useState } from 'react'
import { LangContext } from '../context/lang';

interface letterProps{
  button:boolean
}
export default function Letter({button}:letterProps) {
  const { dispatch: { translate }} = useContext(LangContext);
  // const [make,setMake] = useState<boolean>(false);
  const [btnPopUp,setBtnPopUp] = useState<boolean>(true);
  
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
            <button onClick={()=> setBtnPopUp(button)}>
              {translate('sub')}
            </button>
        </div>
    </div>
  )
}
