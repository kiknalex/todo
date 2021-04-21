import React, {useState, useEffect} from 'react'
import Header from "./components/Header"
import MainContent from "./components/MainContent";

function App() {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')))
  useEffect(() => {
    localStorage.setItem('darkMode', 'false');
  },[])
  useEffect(() => {
    if(!darkMode) document.body.classList.add("light-mode");
    else document.body.classList.remove("light-mode");
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  },[darkMode])
  return (
    <div className="App">
      <div className={`${darkMode ? "img-dark" : "img-light"} bg-img`}></div>
      <Header 
      setDarkMode={setDarkMode}
      darkMode={darkMode}
      />
      <MainContent darkMode={darkMode} />
      <h2 className="footer-text">Drag and drop to reorder list</h2>
    </div>
  );
}

export default App;
