import {useRef} from "react";
import Forward202 from "./Forward202";
function Forward201()
{
    var inref = useRef()
    function change()
    {
        inref.current.style.backgroundColor="Yellow"
        inref.current.style.color="Green"
    }
    return(
    <div>
<Forward202 ref={inref}></Forward202>
<button onClick={change}>ok</button>
    </div>
    )
}
export default Forward201