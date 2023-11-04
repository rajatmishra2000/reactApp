import {useState} from "react";
function Func61()
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
    return(
        <div>
            {
      data?<h1>Ram</h1>:<h1></h1>
            }
    <button onClick={show}>show</button>
    <button onClick={hide}>hide</button>
        </div>
    )
}
export default Func61