import { Bell } from 'lucide-react'

function Header({date, weather, user}){
    return(
        <header className="header"> 
            <div className="greeting">
                <h2>{user}</h2>
                <p>{date}</p>
                <p>{weather}</p>
            </div>
            <button className="notification"><Bell size={20} color='white'/></button>
            <button className="check-in"> Check in</button>
            

        </header>
    )
}

export default Header