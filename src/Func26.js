import{useState} from "react";
function Func26(p)
{
const[data ,setdata]=useState("Seeta")
const[data1,setdata1]=useState("Raghuvanshi")
const[data2,setdata2]=useState("JANAKPUR")
const[data3,setdata3]=useState("416161616516")
function change()
{
    setdata(p.Firstname)
    setdata1(p.Lastname)
    setdata2(p.Address)
    setdata3(p.Mobileno)
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
export default Func26