import {useEffect} from "react";
import React,{useState} from "react";
function Func33()
{
    const[data,setdata]=useState(0)
    const[data1,setdata1]=useState(100)
React.useEffect(()=>{console.log("useEffect is  called")})
function Change()
{
    setdata(data+1)
}
function Change1()
{
    setdata1(data1+1)
}
return(
    <div>
    <h1>{data}</h1>
    <h1>{data1}</h1>
    <button onClick={Change}>counter</button>
    <button onClick={Change1}>data</button>
    </div>
)
}
export default Func33