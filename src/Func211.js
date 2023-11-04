import { useState } from "react";

function Func211(p)
{
    const[data,setdata]=useState(p.name)
    function change()
    {
        setdata("Shivam Mishra")
    }
    return(
        <div>
        <h1>{data}</h1>
        <button onClick={change}>ok</button>
        </div>
    )
}
export default Func211