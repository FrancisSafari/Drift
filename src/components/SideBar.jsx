import { Link } from "react-router-dom"
import { Home, Compass, Calendar, BarChart2, Bookmark, Settings , Gamepad2 } from 'lucide-react'

export default function SideBar({user, location}){
    return(
        <div className="side-bar">
            <div className="side-bar-top">
                <div className="logo-container">
                    <div className="logo"></div>
                    <h3>Drift</h3>
                </div>

                <nav className="nav">
                    <Link to="/"> 
                        <Home size = {20} />
                        Home
                    </Link>
                    <Link to="/">
                        <Compass size = {20}/>
                        Explore
                    </Link>
                    <Link to="/">
                        <Calendar size = {20}/>
                        Planner
                    </Link>
                    <Link to="/">
                        <BarChart2 size = {20}/>
                        Results
                    </Link>
                    <Link to="/">
                        <Bookmark size = {20}/>
                        Saved
                    </Link>
                    <Link to="/">
                        <Gamepad2 size = {20}/>
                        Games
                    </Link>
                    <Link to="/">
                        <Settings size = {20}/>
                        Settings
                    </Link>
                    
                    
                </nav>
            </div>
           

            <div>
                <div className="profile">
                    <div className="profile-pic">
                        
                    </div>
                    <div className="location">
                        <h5>{user}</h5>
                        <p>{location}</p>
                    </div>
                
                </div>
            </div>
        </div>
    )
    
}