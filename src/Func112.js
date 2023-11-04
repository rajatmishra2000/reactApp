import{useEffect} from "react";
import React,{useState} from "react";
function Func112()
{
    const[counter,setCounter]=useState(0)
    const[data,setData]=useState(100)
    React.useEffect(()=>{console.log("UseEffect is a called");})
    function change()
    {
        setCounter(counter+1)
    }
    function disp()
    {
        setData(data+1)
    }
    return(
        <div>
        <h1>{counter}</h1>
        <h1>{data}</h1>
        <button onClick={change}>counter</button>
        <button onClick={disp}>data</button>
        </div>
    )
}
export default Func112