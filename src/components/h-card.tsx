import {BiBookBookmark} from 'react-icons/bi'
interface CardProps{
    title:string;
    type: string

}
export default function Hcard({title,type}:CardProps){
    return(
        <div className="h-card">
            <div className="h-pic"></div>
            <div className='not'>
                <div>
                    <h1>{title}</h1>
                    <p>{type}</p>
                </div>
                <BiBookBookmark />
            </div>
        </div>
    )
}