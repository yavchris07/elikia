
import '../styles/home.scss';
import {AiOutlineArrowRight} from 'react-icons/ai';
import lg from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

interface cardLeft{
  text:string,
  picture:string,
}


export default function CardLeft({text,picture}:cardLeft) {

  const nv = useNavigate();

  return (
    <div className='left-card'>
        <div className='picture'>
            <img src={picture} alt="" />
        </div>

        <div className='notes'>
             
            <div className='btn'>
              {/* <button  onClick={()=> nv(root)}>  */}
                More 
              {/* </button> */}
              <AiOutlineArrowRight className='op'/>
            </div>
            
        </div>
    </div>
  )
}
