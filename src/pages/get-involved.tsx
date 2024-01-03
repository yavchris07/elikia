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
import LeftCard from '../components/left-card';
import p from '../assets/t.jpg'

// function Kard() {
//   const { dispatch: { translate }} = useContext(LangContext);

//   return(
//     <div className='x'>
//       <div></div>

//       <div>
//         <h3>{translate('partner')}</h3>
//         <p>{translate('pt-txt')} </p>
//       </div>

//     </div>
//   )
// }

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

        {/* <Card 
          title={translate('vol')}
          resume= {translate('vol-txt')}
          icon={<MdVolunteerActivism />}
          clas='kart'
        /> */}

        <div className='kart'>
          <div className="pic"><MdVolunteerActivism /></div>
          <h3>{translate('vol')}</h3>
          <div className='note'>
            <p>{translate('vol-txt')}</p>
            <p>{translate('vol-txt1')}</p>
            <p>{translate('vol-txt2')}</p>
            <p>{translate('vol-txt3')}</p>
            <p>{translate('vol-txt4')}</p>
            {/* <p>{translate('vol-txt0')}</p> */}
          </div>
        </div>

        {/* <Card 
          title=
          resume=
          icon={<MdRememberMe />}
          clas='kart'
        /> */}

        {/*  new card be partner*/}
        <div className='x'>
          <div className='p'> <img src={p} alt="" /></div>

          <div className='n'>
            <h3>{translate('partner')}</h3>
            <p>{translate('pt-txt')} </p>
          </div>

        </div>
       

      </div>
      
      <Footer />
    </>
  )
}
