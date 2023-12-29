
import '../styles/home.scss';
import {AiOutlineArrowRight} from 'react-icons/ai';
import lg from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

interface leftCard{
  title:string,
  summary:string,
  root:string,
  pic:string,
  bg:string
}

export default function LeftCard({title,summary,root,pic,bg}:leftCard) {

  const nv = useNavigate();

  return (
    <div className='left-card'>
        <div className='picture'>
            <img src={pic} alt="" />
        </div>

        <div className='notes' style={{background:bg}}>
          <div className='all'>
            <h1>{title}</h1>
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
    </div>
  )
}
