import { useState } from "react";
function Func3()
{
    const [data,setData]=useState("sita")
    function change()
    {
        setData("geeta")
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={change}>ok</button>
        </div>
    )
}
export default Func3