import { useContext, useState } from 'react';
import BannerShort from '../components/banner-short'
import Card from '../components/card'
import { LangContext } from '../context/lang';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import volu from '../assets/volu.jpg';
import { MdVolunteerActivism } from "react-icons/md";
import { MdRememberMe } from "react-icons/md";
import '../styles/get.scss';


export default function GetInvolved() {
  const { dispatch: { translate }} = useContext(LangContext);
  const [on] = useState<boolean>(false);
  
  return (
    <>
      <Navbar />
      <BannerShort 
        title={translate('get')} 
        summary='' 
      />
      <div className='cont'>
        <Card 
          title={translate('vol')}
          resume= {translate('vol-txt')}
          icon={<MdVolunteerActivism />}
          clas='kart'
        />

        <Card 
          title={translate('partner')}
          resume={translate('pt-txt')} 
          icon={<MdRememberMe />}
          clas='kart'
        />
      </div>
      
      <Footer />
    </>
  )
}
