import React, {useState} from "react";

export default function Counter ()  {
    const [counter,setCounter] = useState(0);
    return(
        <div className="topic">
            <h2>Changer le compteur : {counter}</h2>
        
            <div>
                <button onClick={()=> setCounter(counter+1)}>+</button>
                <button onClick={()=> setCounter(counter-1)}>-</button>
            </div>
        </div>
    )
}
