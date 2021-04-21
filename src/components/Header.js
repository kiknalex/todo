import React from 'react'
const Header = ({darkMode, setDarkMode}) => {
    
    return (
        <header>
            <div className="title-container">
            <h1 className="title">T O D O</h1>
            <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}><span className="material-icons theme-icons">{`${darkMode === true ? "nightlight_round" : "light_mode"}`}</span></button>
            </div>
        </header>
    )
}

export default Header;