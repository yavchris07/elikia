import React, { useContext, useState } from 'react'
import Card from '../components/card'
import BannerShort from '../components/banner-short'
import { LangContext } from '../context/lang';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
// const styles = '../styles/pro.scss';
import { MdCastForEducation } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import '../styles/pro.scss';
import p from '../assets/p.jpg'

export default function Program() {

  const { dispatch: { translate }} = useContext(LangContext);
  // const [on] = useState<boolean>(false);
  const [expendable,setExpendable] = useState<boolean>(true);
  
  return (
    <>
      <Navbar /> 
      <BannerShort 
        title={translate('prog')} 
        summary=''
        bg={p}

      />
      
      <div className='pro'>
        {
          expendable ? <div>
          <Card 
            title={translate('two-txt')} 
            resume={translate('pro-educ').substring(0,220)}
            icon={<IoSchoolSharp />}
            clas='kar'
          />
          <button  type="button"
            onClick={()=> setExpendable(false)}
            className='btn'
            
          >
            Read more
          </button>
          </div>  : 
        <Card 
          title={translate('two-txt')} 
          resume={translate('pro-educ')}
          icon={<IoSchoolSharp />}
          clas='kar'
        />
        
        }
        

      </div>
 
      <Footer />
    </>
  )
}
