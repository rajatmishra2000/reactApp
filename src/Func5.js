import { useState } from "react";
function Func5()
{
    const [data,setData]= useState("rajat")
    const [data1,setData1]=useState("Govind colony indor")
    const [data2,setData2]=useState(20000)
    function change()
    {
        setData("shivam")
        setData1("Marimata")
        setData2(50000)
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
export default Func5