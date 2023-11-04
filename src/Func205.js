import{useState} from "react";
function Func205()
{
    const[name,setname] = useState("RAM")
    function Change()
    {
       setname("Shyam")
    }
    return(
        <div>
        <h1>{name}</h1>
        <button onClick={Change}>ok</button>
        </div>
    )
}
export default Func205