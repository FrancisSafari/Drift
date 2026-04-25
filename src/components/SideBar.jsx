import { Link } from "react-router-dom"

export default function SideBar({user, location}){
    return(
        <div className="side-bar">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/">Explore</Link>
                <Link to="/">Planner</Link>
                <Link to="/">Results</Link>
                <Link to="/">Saved</Link>
                <Link to="/">Settings</Link>
                <Link to="/">Games</Link>
                <div>
                    <div className="profile">
                        <div>
                            Profile pic
                        </div>
                        <h5>{user}</h5>
                        <h6>{location}</h6>
                    
                    </div>
                </div>
            </nav>
        </div>
    )
    
}