import{useRef} from "react";
import { redirectDocument } from "react-router-dom";
function Uncontrolled1()
{
    var inref = useRef(null)
    function display()
    {
        console.log("value1 :",inref.current.value);
        var v2 = document.getElementById("i1").value
        console.log("value2 :" , v2);
    }
    return(
        <div>
    <input type="text" ref={inref}></input><br></br>
    <input type="text" id="i1"></input><br></br>
    <button onClick={display}>ok</button><br></br>
        </div>
    )
}
export default Uncontrolled1