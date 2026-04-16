import "./Amazon.css";

function Card({title,model,description,old,latest,idx}){
    return(
        <>
        <div className="card">
            
            <div className="description">
                <h2><b>{title[idx]}</b></h2>
                <h3>{model[idx]}</h3>
                <h4>{description[idx]}</h4>
            </div>
            <div className="price">
                <p className="old">{old[idx]}</p>
                <p><b>{latest[idx]}</b></p>
            </div>
        </div>
        </>
    )
}

export default Card;
