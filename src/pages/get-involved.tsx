import { useContext } from 'react';
import BannerShort from '../components/banner-short'
import Card from '../components/card'
import { LangContext } from '../context/lang';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function GetInvolved() {
  const { dispatch: { translate }} = useContext(LangContext);
  
  return (
    <>
      <Navbar />
      <BannerShort 
        title={translate('get')} 
        summary='' 
      />
      <Card 
        title={''} 
        resume={translate('volunteer')} 
      />
      <Footer />
    </>
  )
}
