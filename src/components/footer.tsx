import React, { useContext, useState } from 'react';
import Letter from './letter';
import '../styles/footer.scss';
import { LangContext } from '../context/lang';
import FooterCard from './footer-card';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

interface footProps{
  button:boolean
}
export default function Footer() {

  // const [sum] = useState<Summary[]>(SUM);
  const { dispatch: { translate }} = useContext(LangContext);

  return (
    <div className='f'> 
      {/* <Letter button={button}/> */}
      <div className='container'> 

        <div className='card'>
          <h4>Contact</h4>
          <p>+243 989876765</p>
          <p>+243 897646764</p>
          <p>+243 909876787</p>
        </div>

        <div className='card'>
          <h4>physical address</h4>
          <p>Goma - North kivu</p>
          <p>Commune de Goma</p>
          <p>Quartier les volcans, 100</p>
        </div>

        {/* our vision */}
         <FooterCard
         
          title='E-mail'
          summary='infos@elikia.org' 
        />

      </div>

      <div className='foot'>
        <span>{translate('copyright')}</span>
        <div className='so'>
          <FaFacebook />
          <FaLinkedin />
          <FaXTwitter />
          <FaInstagram />
        </div>
      </div>

    </div>
  )
}
