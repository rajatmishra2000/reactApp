import {useState} from "react";
function Func32()
{
    const[data,setdata1]= useState(false)
    return(
        <div>
 {
 data?<h1>RAM</h1>:<h1></h1>
 }           
<button onClick={()=>setdata1(true)}>Show</button>
<button onClick={()=>setdata1(false)}>Hide</button>
        </div>
    )
}
export default Func32