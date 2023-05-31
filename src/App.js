
//imports, dependence  symfony => autoload
import React  from "react";
import Header from "./components/Header.js";
import Counter from "./components/Counter.js";
import Pokedex from "./components/Pokedex.js";
import TimeoutTab from "./components/TimeoutTab.js";

const App = () =>{
    return (
        <div className="centered">
            <Header/>
            <Counter/>
            <Pokedex/>
        </div>
    )
}

export default App;