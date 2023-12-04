import '../styles/home.scss';
import lg from '../assets/logo.png'
import {AiOutlineArrowRight} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

interface rigthCard{
    title:string,
    brnck:string,
    subtitle:string,
    summary:string,
    root:string
}

export default function RightCard({title,brnck,subtitle,summary,root}:rigthCard) {
  const nv = useNavigate();

  return (
    <div className='right-card'>
        
        <div className='notes'>
            <h1>{subtitle}</h1>
            <hr />
            <p>{summary}</p>

            <div className='btn'>
              <button  onClick={()=> nv(root)}> 
                More 
              </button>
              <AiOutlineArrowRight className='op'/>
            </div>
        </div>
        <div className='picture'>
             
            <img src={lg} alt="" />
            <h1>{title}</h1>
            <h2>{brnck}</h2>
        </div>
    </div>
  )
}
