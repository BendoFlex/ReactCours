
//imports, dependence  symfony => autoload
import React  from "react";
import Header from "./components/Header.js";
import Counter from "./pages/Counter.js";

const App = () =>{
    return (
        <div className="centered">
            <Header/>
            <Counter/>
        </div>
    )
}

export default App;