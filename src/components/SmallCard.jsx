
function SmallCard({price, type, title, description, distance, duration}) {
    return(
        <div className="small-card">
            <h5 className="price">{price}</h5>
            <h5 className="type">{type}</h5>
            <h3 className="title">{title}</h3>
            <h5 className="description">{description}</h5>
            <span className="distance">{distance}</span>
            <span className="duration">{duration}</span>
        </div>
        

    )
}

export default SmallCard