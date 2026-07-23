import { Link } from "react-router-dom"
import { useState } from 'react';
import SmallCard from "../components/SmallCard.jsx"
import SideBar from "../components/SideBar.jsx"
import Header from "../components/Header.jsx"
import { Wind, Zap, Brain, Coffee, Compass , Clock4Icon, Users, Palette,  MapPin , CircleDollarSign, Wand2 } from 'lucide-react'
import { activities, moods } from "../data/activities.js";



function HomePage(){
    const [selectedMood, setSelectedMood] = useState(null)
    const [aiInput, setAiInput] = useState ('')
    const moodIcons = {
        energetic: <Zap size={16} />,
        chill: <Wind size={16} />,
        social: <Users size={16} />,
        adventurous: <Compass size={16} />,
        creative: <Palette size={16} />,
        cozy: <Coffee size={16} />,
    }

    const filteredActivities = selectedMood
        ? activities.filter(activity => activity.moods.includes(selectedMood))
        : activities

    console.log(aiInput)

    
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
                                key = {mood}
                                className={selectedMood === mood ? 'moods active' : 'moods'}
                                onClick={()=>setSelectedMood ( selectedMood === mood ? null : mood)}
                                >
                                {moodIcons[mood]} {mood}
                                </button>
                           ))}
                        </div>
                        
                        <div className="describe"> 
                            
                            <input
                                className="ai-input"
                                placeholder="Describe your mood with AI..."
                                value={aiInput}
                                onChange = {(e) => setAiInput(e.target.value)}
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
                            {filteredActivities.map(activity => (
                                
                                <Link key={activity.id} to={`/activity/${activity.id}`} className="card-link">
                                    <SmallCard
                                    price={activity.price}
                                    type={activity.type}
                                    title={activity.title}
                                    description={activity.description}
                                    distance={activity.distance}
                                    duration={activity.duration}
                                    rating={activity.rating}
                                    image={activity.image}
                                />
                                </Link>
                                
                            ))}
                        </div>

                    </div>
                </div>
                


             </div>


        </div>
        
    )
}
export default HomePage