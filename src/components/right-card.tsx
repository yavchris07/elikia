import '../styles/home.scss';
import {AiOutlineArrowRight} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

interface rigthCard{
    title:string,
    summary:string,
    root:string,
    pic:string,
    bg:string
}

export default function RightCard({title,summary,root,pic,bg}:rigthCard) {
  const nv = useNavigate();

  return (
    <div className='right-card'>
        
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

        <div className='picture'>   
          <img src={pic} alt="" />
        </div>
    </div>
  )
}
