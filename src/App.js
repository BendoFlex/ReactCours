
//imports, dependence  symfony => autoload
import React , {useState} from "react";

const App = () =>{
    const [counter,setCounter] = useState(0);
    return (
        <div>
            <h1>
                BendoCours
            </h1>
            <p>Compteur : {counter}</p>
            <button onClick={()=> setCounter(counter+1)}>Incrémenter</button>
            <button onClick={()=> setCounter(counter-1)}>Décrémenter</button>
        </div>
    )
}

export default App;