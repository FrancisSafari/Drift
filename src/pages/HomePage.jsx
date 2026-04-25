import { Link } from "react-router-dom"
import SmallCard from "../components/SmallCard.jsx"
import SideBar from "../components/SideBar.jsx"
import Header from "../components/Header.jsx"


function HomePage(){
    return(
        <>
            {/* This is the sidebar */}
            <SideBar user="Francis" location="Edmonton, AB"></SideBar>

             {/* This is the main column */}
             <div>
                {/* This is the  homepage header */}
                <Header user ="Francis" date="Wednesday, October 24, 2026" weather="Clear, 18 C"></Header>
                

                {/* How's the move section */}
                <div>
                    <button className="moods">Calm</button>
                    <button className="moods">Energetic</button>
                    <button className="moods">Reflective</button>
                    <button className="moods">Cozy</button>
                    <button className="moods">Adventurous</button>

                </div>

                {/* Trending near you */}
                <div>
                    <div className="trending-title">
                        <h3> TRENDING NEAR YOU</h3>
                    </div>

                    <div className="trending-header">
                        <h1>Neon Serenity Night Walk</h1>
                    </div>

                    <div className="Trending-description">
                        <h5> Perfect for clearing your head</h5>
                    </div>

                    <div className="trending-details">
                        <span className="duration"> 1-1.5hrs</span>
                        <span className="distance">2.1 km</span>
                        <h5 className="price">Free</h5>

                    </div>
                    <button>
                        See details
                    </button>

                </div>

                {/* Free and nearby */}
                <div className="homepage-section">
                    <div className="Header">
                        <h3>Free & nearby right now</h3>
                        <h6>Based on your recent vibe shift toward "cozy"</h6>
                        <button>View all</button>
                    </div>
                    <div className="carrousel">
                        <SmallCard price= "Free" type="OUTDOOR" title="The Hidden Bookmark" description="Best trail for cleaning your head" distance="2.1km away" duration=" 1 - 1.5 hours"></SmallCard>
                        <SmallCard price= "Free" type="URBAN" title="Mirror Mist Rooftop" description="Open courts" distance="4.3 km" duration="1 hr"></SmallCard>
                        <SmallCard price= "Free Today" type="ARTS" title="The Zen Loop Gallery" description="Free wednesday " distance="5-0 km away" duration=" 1-2 hrs"></SmallCard>
                    </div>

                </div>


             </div>


        </>
        
    )
}

export default HomePage