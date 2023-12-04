import React, { useContext, useState } from 'react'
import Card from '../components/card'
import BannerShort from '../components/banner-short'
import { LangContext } from '../context/lang';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
// const styles = '../styles/pro.scss';
import { MdCastForEducation } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import '../styles/pro.scss'

export default function Program() {
  const { dispatch: { translate }} = useContext(LangContext);
  const [on] = useState<boolean>(false);
  
  return (
    <>
      <Navbar /> 
      <BannerShort 
        title={translate('prog')} 
        summary='' 
      />
      <div className='pro'>
        {/* <Card 
          title={translate('vol')} 
          resume={translate('pt-txt')} 
          icon={<MdCastForEducation />}
          clas='kar'
        /> */}
      <Card 
        title={translate('two-txt')} 
        resume={translate('pro-educ')}
        icon={<IoSchoolSharp />}
        clas='kar'
      />
      </div>
 
      <Footer />
    </>
  )
}
