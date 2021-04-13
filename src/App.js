import Header from "./components/Header"
import Todos from './components/Todos'
function App() {
  return (
    /* ტოდოს კონტეინერები აბსოლუტით გავასწოროთ. */
    <div className="App">
      <Header />
      <Todos />
    </div>
  );
}

export default App;
