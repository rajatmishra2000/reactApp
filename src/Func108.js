import{useState} from "react";
function Func108()
{
    const[data,setdata]=useState("Ram")
return(
    <div>
    <h1>{data}</h1>
    <input type="text" value={data} onChange={(e)=>setdata(e.target.value)}></input>
    </div>
)
}
export default Func108