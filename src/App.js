import './App.css';

import Currencies from "./components/Currencies/Currencies";
import Convert from "./components/Convert/Convert";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            {/*<Routes>*/}
            {/*    <Route path="/" element={<Currencies/>}/>*/}
            {/*    <Route path="/convert" element={<Convert/>}/>*/}
            {/*</Routes>*/}
            <Currencies/>
            <Convert/>
        </div>
    );
}

export default App;