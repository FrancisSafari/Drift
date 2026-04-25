function Header({date, weather, user}){
    return(
        <header className="header"> 
            <div className="greeting">
                <h2>{user}</h2>
                <h6>{date}</h6>
                <h6>{weather}</h6>
            </div>
            <button className="notification">🔔</button>
            <button className="check-in"> Check in</button>
            

        </header>
    )
}

export default Header