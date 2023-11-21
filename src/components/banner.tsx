import React, { useContext } from 'react'
import '../styles/banner.scss'
import { LangContext } from '../context/lang';



function Banner() {
  
  const { dispatch: { translate }} = useContext(LangContext);
  return (
    <section className='banner'>
      <div className='cover'>
        {/* <h1>{translate('text')}</h1>
        <p>{translate('slogan')}</p> */}
      
          {/* <NavLink 
            to={'/about'} 
            className='link'
          >
            {translate('btn')}
            <AiOutlineArrowRight className='op'/>
          </NavLink> */}
         
  
       
      </div>
    </section>
  )
}

export default Banner