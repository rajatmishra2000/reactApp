import { useRef } from "react";

function Uncontrolled()
{
    var inref = useRef(null)
function Change()
{
    console.log("value1:",inref.current.value)
    var v2 = document.getElementById("i1").value
    console.log("value2:",v2);
}
    return(
        <div>
        <input type="text" ref={inref}></input><br></br>
        <input type="text" id="i1"></input><br></br>
        <button onClick={Change}>ok</button>
        </div>
    )
}
export default Uncontrolled