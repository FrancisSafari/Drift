
function SmallCard({price, type, title, description, distance, duration}) {
    return(
        <div className="small-card">
            <div className="images">
                Images go here
            </div>

            <div className="small-card-content">
                <div>
                    <h5 className="type">{type}</h5>
                    <h5 className="price">{price}</h5>
                </div>
                
                <div>
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