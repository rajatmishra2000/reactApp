import Child1 from "./Child1"
import {useState} from "react";
function Parent1()
{
    const[data,setdata]=useState("")

    function display(mname)
    {
        setdata("Hello"+mname)
    }
    return(
        <div>
            <h1>{data}</h1>
    <Child1 name={display}></Child1>
        </div>
    )
}
export default Parent1