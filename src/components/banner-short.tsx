import React from 'react';
import '../styles/banner1.scss'

interface titleProps{
  title:string;
  summary: string;
  path?:string,
  bg?:string;
}

function BannerShort({title,summary,bg}:titleProps) {
  return (
    <section className='banner1' style={{backgroundImage:bg}}>
       <div className='cover-short' >
        {/* <p>{path}</p> */}
        <h1>{title}</h1>
        {/* le logo de l fondtion */}
        <p>{summary}</p>
       </div>
    </section>
  );
}

export default BannerShort;
