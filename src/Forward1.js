import {useRef} from "react";
import Forward2 from './Forward2'
function Forward1()
{
    var inref = useRef()

    function change()
    {
        inref.current.style.backgroundColor="Yellow"
        inref.current.style.color="Green"
    }
    return(
        <div>
    <Forward2 ref={inref}></Forward2>
    <button onClick={change}>ok</button>
    </div>
    )
}
export default Forward1