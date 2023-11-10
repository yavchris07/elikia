import React from 'react';
import Banner from '../components/banner';
// import CardList from '../components/card-list';
import Hcard from '../components/h-card';
import '../styles/home.scss';

export default function Home() {
  return (
    <>
      <Banner /> 
      {/* <CardList /> */}
      <div className='cont'>
        <div>
          <h1>Book helping</h1>
          <span>Helping write new stories of hope</span>
        </div>

        <div className='list'>
          <Hcard title='Book of xxxxxxxxxx' type='Elikia book helping'/>
          <Hcard title='The Vikinga' type='Elikia book helping'/>
          <Hcard 
            title='New Carabei' 
            type='Elikia book helping'
          />
        </div>
       
        {/* <Hcard />
        <Hcard /> */}
      </div>

      <div className='cont'>
        <div>
          <h1>Science helping</h1>
          <span>Helping write new stories of hope</span>
        </div>

        <div className='list'>
          <Hcard title='Quatumn physics' type='Elikia book helping'/>
          <Hcard title='Mathmatics' type='Elikia book helping'/>
          <Hcard 
            title='Chimistry' 
            type='Elikia book helping'
          />
        </div>
       
        {/* <Hcard />
        <Hcard /> */}
      </div>


    <div className='out'>
      
      <div>
      <h1>Helping</h1>
      <p>
        Building Communities by empowering one individuals at a time; Igniting dreams; Helping write new stories of hope.
        Rekindling for brighter futures;
      </p>
      </div>
    </div>
      

    <div className='cont'>
        <div>
          <h1>Eduction helping</h1>
          <span>Helping write new stories of hope</span>
        </div>

        <div className='list'>
          <Hcard title='Geology' type='Elikia book helping'/>
          <Hcard title='History' type='Elikia book helping'/>
          <Hcard 
            title='French' 
            type='Elikia book helping'
          />
        </div>
       
        {/* <Hcard />
        <Hcard /> */}
      </div>

    </>
  )
}

