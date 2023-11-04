import {useState} from "react";
function Func48()
{
    const[data,setdata]=useState(false)
    function show()
    {
      setdata(true)
    }
    function hide()
    {
        setdata(false)
    }
    if(data == true)
    {
        return(
            <div>
            <h1>Ram</h1>
            <button onClick={show}>show</button>
            <button onClick={hide}>hide</button>    
            </div>
        )
    }
    else
    {
        return(
            <div>
        <h1></h1>
        <button onClick={show}>show</button>
        <button onClick={hide}>hide</button>
        </div>
        ) 
    }
}
export default Func48