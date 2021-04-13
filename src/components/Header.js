import React, { useState } from 'react'
import lightImg from "../images/bg-mobile-light.jpg"
import darkImg from "../images/bg-mobile-dark.jpg"
const Header = () => {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <header>
            <img className="bg-img" src={darkMode === false ? lightImg : darkImg}></img>
            <div className="title-container">
            <h1 className="title">T O D O</h1>
            <button onClick={() => setDarkMode(!darkMode)}>dark mode</button>
            </div>
        </header>
    )
}

export default Header;