import Forward3 from './Forward3'
import{useRef} from "react";
function Forward()
{
    var inref = useRef()
 function change()
 {
    inref.current.style.backgroundColor="Yellow"
    inref.current.style.color="Green"
 }
 return(
    <div>
    <Forward3 ref={inref}></Forward3>
    <button onClick={change}>ok</button>
    </div>
 )
}
export default Forward