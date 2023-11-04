import {useState} from "react";
function Func104()
{
    const[data,setdata]=useState("Ram")
    const[data1,setdata1]=useState("Govind Colony Indore")
    const[data2,setdata2]=useState(200000000)
function change()
{
    setdata("Shyam")
    setdata1("Marimata")
    setdata2(200000000)
}

    return(
        <div>
        <h1>{data}</h1>
        <h1>{data1}</h1>
        <h1>{data2}</h1>
        <button onClick={change}>ok</button>
        </div>
    )
}
export default Func104