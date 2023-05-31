import React, {useState, useEffect} from "react";
import axios from "axios"; 


const Pokedex = () => {
    const [pokemon,setPokemon] = useState({})
    const [pokemonId,setPokemonId] = useState(1)
    const [types, setTypes] = useState([]);
    const [sprites, setSprites] = useState({})
    console.log("types",types)
    useEffect(()=>{
        let baseUrl = "https://pokeapi.co/api/v2/pokemon"
        let url = `${baseUrl}/${pokemonId}`;
        console.log(url)
        axios.get(url)
             .then(res => {
                console.log(res.data)
                setPokemon(res.data)
                setTypes(res.data["types"].map((type)=>type['type']))
                setSprites(res.data.sprites.front_default);
            })
             .catch(console.log)
    },[pokemonId])

    function getRandomId(){
        let randomId =Math.round(Math.random()*151)+1;
        setPokemonId(randomId)
    }
    return(
        <div className="topic">
            <h1>Pokedex</h1>
            <div className="pokedex">
                <div className="pokedex-part">
                    <div className="screen">
                            <p>{pokemon.name}</p>
                            <p>#{pokemon.id}</p>
                            <figure>
                                <img src={sprites}/>
                            </figure>
                            <div>
                                <h1>Types</h1>
                                {types.map(type=>(
                                    <p>{type.name}</p>
                                ))}
                            </div>
                            <button onClick={()=>getRandomId()}>Change</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
/*
 
*/ 
export default Pokedex;