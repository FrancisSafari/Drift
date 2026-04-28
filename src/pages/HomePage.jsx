import { Link } from "react-router-dom"
import { useState } from 'react';
import SmallCard from "../components/SmallCard.jsx"
import SideBar from "../components/SideBar.jsx"
import Header from "../components/Header.jsx"
import { Wind, Zap, Brain, Coffee, Compass , Clock4Icon, MapPin , CircleDollarSign, Wand2 } from 'lucide-react'




function HomePage(){
    const [selectedMood, setSelectedMood] = useState(null)
    const moods = [
        { name: 'Calm', icon: <Wind size={16} /> },
        { name: 'Energetic', icon: <Zap size={16} /> },
        { name: 'Reflective', icon: <Brain size={16} /> },
        { name: 'Cozy', icon: <Coffee size={16} /> },
        { name: 'Adventurous', icon: <Compass size={16} /> },
    ]
    
    return(
        <div className="app-layout">
            {/* This is the sidebar */}
            <SideBar user="Francis" location="Edmonton, AB">

            </SideBar>

             {/* This is the main column */}
            <div className="main-content">
                {/* This is the  homepage header */}
                <Header user ="Good morning Francis" date="Wednesday, October 24, 2026" weather="Clear, 18 C"></Header>
                

                {/* How's the move section */}
                <div className="content">
                    <div className="the-move">
                        <div className="move-heading">
                            <h4>How's the move?</h4>
                            <button className="pick-vibe">
                                <p>pick a vibe</p>
                            </button>
                        </div>
                       

                        <div className="mood-buttons">
                            {moods.map(mood => (
                                <button
                                key = {mood.name}
                                className={selectedMood === mood.name ? 'moods active' : 'moods'}
                                onClick={()=>setSelectedMood (mood.name)}
                                >
                                {mood.icon} {mood.name}
                                </button>
                           ))}
                        </div>
                        
                        <div className="describe"> 
                            
                            <input
                                className="ai-input"
                                placeholder="Describe your mood with AI..."
                            />
                            <Wand2 className="ai-icon" size={20} />
                        </div>

                    </div>

                 {/* Trending near you */}
                    <div className="trending">
                        <div className="trending-content">
                            <div className="trending-title">
                                <h3 className="trending-label"> TRENDING NEAR YOU</h3>
                            </div>

                            <div className="trending-header">
                                <h1 className="trending-header-label">Neon Serenity Night Walk</h1>
                            </div>

                            <div className="Trending-description">
                                <p className="trending-description-text"> "Perfect for clearing your head. High energy, completely free, no planning needed."</p>
                            </div>

                            <div className="trending-details">
                                <span className="duration"><Clock4Icon size={10} /> 1-1.5hrs</span>
                                <span className="distance"><MapPin size={10} />2.1 km</span>
                                <span className="price"><CircleDollarSign size={10} />Free</span>

                            </div>
                            <button className="see-details">
                                <p className="see-details-text">See details →</p>
                            </button>
                        </div>
                        

                    </div>

                    {/* Free and nearby */}
                    <div className="homepage-section">
                        <div className="mini-header">
                            <div>
                                <h3>Free & nearby right now</h3>
                                <h6>Based on your recent vibe shift toward "cozy"</h6>
                            </div>
                            <button className="view-all">View all {'>'}</button>
                        </div>
                        <div className="carrousel">
                            <SmallCard price= "Free" type="OUTDOOR" title="The Hidden Bookmark" description="Best trail for clearing your
head and finding peace in the" distance="2.1km away" duration=" 1 - 1.5 hours" rating="⭐4.9" image='/src/assets/Warm-library.png'></SmallCard>
                            <SmallCard price= "Free" type="URBAN" title="Mirror Mist Rooftop" description="Open courts, no wait right now.
Perfect for reflective solo play." distance="4.3 km" duration="1 hr" rating="⭐4.7"  image='/src/assets/Rainy-neon-city.png'></SmallCard>
                            <SmallCard price= "Free Today" type="ARTS" title="The Zen Loop Gallery" description="Free Wednesdays — actually
worth going for the acoustic" distance="5-0 km away" duration=" 1-2 hrs" rating="⭐4.8"  image='/src/assets/Zen-gallery.png'></SmallCard>
                        </div>

                    </div>
                </div>
                


             </div>


        </div>
        
    )
}

export default HomePage