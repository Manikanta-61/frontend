import React, {useState} from "react";
function CountIDR(){
    const[count, setCount]=useState(0);
    return(
        <div style={{textAlign:"center", marginTop:"50px"}}>
            <h1>Count IDR</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)} style={{margin:"5px"}}>
                Increase
            </button>
            <button onClick={() => setCount(count - 1)} style={{margin:"5px"}}>
                Decrease
            </button>
            <button onClick={()=>setCount(0)} style={{margin:"5px"}}>
                Reset
            </button>
        </div>
    )
}
export default CountIDR;