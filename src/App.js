import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Currencies from "./components/Currencies/Currencies";
import Convert from "./components/Convert/Convert";

function App() {
  return (
    <div className="App">
      <Currencies/>
      <Convert />
    </div>

  );
}

export default App;