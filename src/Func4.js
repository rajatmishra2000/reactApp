import { useState } from "react";
function Func4()
{
    const [data,setData]=useState("sita")
    const [data1,setData1]=useState("gita")
    function change()
    {
        setData("seema")
        setData1("radha")
    }
    return(
        <div>
            <h1>{data}</h1>
            <h1>{data1}</h1>
            <button onClick={change}>ok</button>
        </div>
    )
}
export default Func4