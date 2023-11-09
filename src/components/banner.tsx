import React from 'react'
import '../styles/banner.scss'
import { NavLink } from 'react-router-dom';
import {AiOutlineArrowRight} from 'react-icons/ai'

function Banner() {
  return (
    <section className='banner'>
      <div className='cover'>
        <h1>Rekindling for brighter futures</h1>
        <p>
          Building Communities by empowering one individuals at a time; Igniting dreams; Helping write new stories of hope  
        </p>
      
          <NavLink 
            to={'/about'} 
            className='link'
          >
            More about us
            <AiOutlineArrowRight className='op'/>
          </NavLink>
         
  
       
      </div>
    </section>
  )
}

export default Banner