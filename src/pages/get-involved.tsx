import { useContext } from 'react';
import BannerShort from '../components/banner-short'
import Card from '../components/card'
import { LangContext } from '../context/lang';

export default function GetInvolved() {
  const { dispatch: { translate }} = useContext(LangContext);
  
  return (
    <>
      <BannerShort 
        title={translate('get')} 
        summary='' 
      />
      <Card 
        title='' 
        resume={translate('volunteer')} 
      />

    </>
  )
}
