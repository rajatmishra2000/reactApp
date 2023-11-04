import{useEffect} from "react";
import React,{useState} from "react";
function Fun218()
{
    const[data,setdata]=useState(0)
    const[data1,setdata1]=useState(100)
React.useEffect(()=>{console.log("UseEffect is a called")},[data1])
function change()
{
    setdata(data+1)
}
function disp()
{
       setdata1(data1+1)
}
return(
    <div>
  <h1>{data}</h1>
  <h1>{data1}</h1>
  <button onClick={change}>data</button><br></br>
  <button onClick={disp}>data1</button>
    </div>
)
}
export default Fun218
