import{useRef}from "react";
function Class102()
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
export default Class102