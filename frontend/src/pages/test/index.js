import { useEffect, useState } from "react";

const Test = () => {
    const [number, setNumber] = useState(0);
    
    const HeroBlock = () => <div>this is the hero block</div>

    var test=3;

    
    
    
    
    return <div>this is a freaking page<br/>
    <HeroBlock />

    <button onClick={()=>setNumber(number + 1)}>{number}</button>

    <a href={number===3?'/':'/login'}>Get me to homepage</a></div>
    }

export default Test;
