import{useState} from "react";
function Controlled1()
{
    const[num,setnum] = useState("priya")
    return(
        <div>
    <h1>{num}</h1>
    <input type="text" value={num} onChange={(e)=>setnum(e.target.value)}></input>
        </div>
    )
}
export default Controlled1