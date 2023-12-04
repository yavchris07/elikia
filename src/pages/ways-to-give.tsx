import React, { useContext, useState } from 'react'
import BannerShort from '../components/banner-short'
import Card from '../components/card'
import {MdOutlineDownloading} from 'react-icons/md'
import { LangContext } from '../context/lang';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/way.scss';

export default function WaysToGive() {

  const { dispatch: { translate }} = useContext(LangContext);  
  const [button] = useState<boolean>(false);
  
  return (
    <>
      <Navbar />
      <BannerShort title={translate('way')} summary=''/>
      {/* <Card 
        title='' 
        resume={translate('site')}   
      /> */}
      <div className='pays'>
        {/* <div>
          <img src={airtel} alt="" />
        </div>
        <div>
          <img src={afri} alt="" />
        </div>
        <div>
          <img src={orange} alt="" />
        </div>
        <div>
          <img src={voda} alt="" />
        </div> */}
      </div>
      <br />
      <br />
      <MdOutlineDownloading style={{fontSize:40}}/>
      <Card 
        title='' 
        resume={translate('site')}
        clas='i'   
      />
      
      <Footer />
    </>
  )
}
