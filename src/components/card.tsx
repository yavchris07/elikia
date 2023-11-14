interface cardProps{
    title : string,
    resume: string,
    clas? : string
}

export default function Card({title,resume,clas}:cardProps){
    return(
        <div className={clas}>
            {/* <div className="pic">about-cards</div> */}
            <div className="note">
                <h2>{title}</h2>
                <p>{resume}</p>
            </div>
        </div>
    )
}