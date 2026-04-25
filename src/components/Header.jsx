function Header({date, weather, user}){
    return(
        <header> 
            <h2>{user}</h2>
            <h6>{date}</h6>
            <h6>{weather}</h6>
            <button> Check in</button>
            <div> Describe your mood with AI</div>

        </header>
    )
}

export default Header