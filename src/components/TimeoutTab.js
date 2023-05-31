import React , {useState,useEffect} from "react"; 

let numbers = [0,1,2];
const TimeoutTab = () => {
    const [count,setCount] = useState(0); 
    const [tab, setTab] = useState([])

    useEffect(() => {

    let timer = setTimeout(()=>{
        if(count<numbers.length){
            setTab([...tab,numbers[count]])
            setCount(count+1);
            console.log(tab)
        }
    },1000)

    return () => clearTimeout(timer);

    }) 

    return(
        <div>
            <h1>Timeout</h1>
            {tab.map((nb,i)=>(
                <p key={i}>{nb}</p>
            ))}
        </div>
    )
}


export default TimeoutTab;