import{useRef}from'react'
function Func109()
{
    var inref = useRef(null)

function change()
{
    console.log("value1 :",inref.current.value);
    var v2 = document.getElementById("i1").value
    console.log("value2 :", v2);
}
    return(
        <div>
    <input type="text" ref={inref}></input><br></br>
    <input type="text" id="i1"></input><br></br>
    <button onClick={change}>ok</button>
        </div>
    )
}
export default Func109