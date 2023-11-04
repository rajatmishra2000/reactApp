import {useState} from "react";
function Func44()
{
    const[data,setdata]=useState("Ram")
    const[data1,setdata1]=useState(100)
    const[data2,setdata2]=useState("211 Govind Colony Indore")
    const[data3,setdata3]=useState(2000000000)
    function change()
    {
        setdata("Seeta")
        setdata1(200)
        setdata2("Aayodhya")
        setdata3(3000000000)
    }
    return(
        <div>
        <h1>{data}</h1>
        <h1>{data1}</h1>
        <h1>{data2}</h1>
        <h1>{data3}</h1>
        <button onClick={change}>ok</button>
        </div>
    )
}
export default Func44
