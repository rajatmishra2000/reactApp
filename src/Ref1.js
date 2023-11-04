import { useRef } from "react";
function Ref1()
{
    var inref = useRef(null)
    function change()
    {
        inref.current.style.backgroundColor="Yellow"
        inref.current.style.color="Green"
    }
    return(
        <div>
            <input type="text" ref={inref}></input><br></br>
            <button onClick={change}>ok</button>
        </div>
    )
}
export default Ref1