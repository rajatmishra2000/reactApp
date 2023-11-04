import {useState} from "react";
function Func49()
{
    const[data,setdata]=useState(false)
    function toggle()
    {
        setdata(!data)
    }
    return(
        <div>
           { 
        data?<h1>Ram</h1>:<h1></h1>
           }
        <button onClick={toggle}>toggle</button>
        </div>
    )
}
export default Func49