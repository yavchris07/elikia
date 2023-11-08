import React from 'react';
import '../styles/banner1.scss'

interface titleProps{
  title:string;
  summary: string
}

function BannerShort({title,summary}:titleProps) {
  return (
    <section className='banner1'>
       <div className='cover-short'>
        <h1>{title}</h1>
        {/* le logo de l fondtion */}
        <p>{summary}</p>
       </div>
    </section>
  );
}

export default BannerShort;
