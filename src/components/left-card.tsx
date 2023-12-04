
import '../styles/home.scss';
import {AiOutlineArrowRight} from 'react-icons/ai';
import lg from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

interface leftCard{
  title:string,
  brnck:string,
  subtitle:string,
  summary:string,
  root:string
}

export default function LeftCard({title,brnck,subtitle,summary,root}:leftCard) {

  const nv = useNavigate();

  return (
    <div className='left-card'>
        <div className='picture'>
            <img src={lg} alt="" />
            <h1>{title}</h1>
            <h2>{brnck}</h2>
        </div>
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
    </div>
  )
}
