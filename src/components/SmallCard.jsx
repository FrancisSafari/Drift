
function SmallCard({price, type, title, description, distance, duration, rating, image}) {
    return(
        <div className="small-card">
            <div className="images" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="rating">
                    <p>{rating}</p>
                </div>
            </div>

            <div className="small-card-content">
                <div className="small-details">
                    <h5 className="type">{type}</h5>
                    <h5 className="price">{price}</h5>
                </div>
                
                <div className="small-descriptions">
                    <h3 className="title">{title}</h3>
                    <p className="description">{description}</p>
                </div>

                <div className="activity-details">
                    <span className="distance">{distance}</span>
                    <span className="duration">{duration}</span>
                </div>
            </div>

        </div>
        

    )
}

export default SmallCard