import React from 'react'

export default function Letter() {
  return (
    <div className='letter'> 
        <div className='dot'>
            <div className='dot-one'></div>
            <div className='dot-two'></div>
            <div className='dot-three'></div>
        </div>
        <div className='input'>
            <div>
                <h3>Information letter :</h3>
                <span>We promise not to spam !</span>
            </div>
            <button type="button">I want to get involved</button>
        </div>
    </div>
  )
}
