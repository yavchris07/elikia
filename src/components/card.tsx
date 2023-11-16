import { ReactNode } from "react"

interface cardProps{
    title : string,
    resume: string,
    icon? : ReactNode,
    clas:string
}

export default function Card({title,resume,icon,clas}:cardProps){
    return(
        <div className={clas}>
            <div className="pic">{icon}</div>
            <div className="note">
                <h2>{title}</h2>
                <p>{resume}</p>
            </div>
        </div>
    )
}