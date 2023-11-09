interface cardProps{
    title : string,
    resume: string
}

export default function Card({title,resume}:cardProps){
    return(
        <div className="about-card">
            {/* <div className="pic"></div> */}
            <div className="note">
                <h2>{title}</h2>
                <p>{resume}</p>
            </div>
        </div>
    )
}