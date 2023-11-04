import{useState}from "react";
function Func30()
{
    const[log,setLog]=useState("")
    const[pass,setPass]=useState("")
    const[message,setMessage]=useState("")
    function disp(e)
    {
        log==="ram"?pass==="1234"? setMessage(" Welcome "+log):setMessage("Invalid passward"):pass==="1234"?setMessage("Invalid loginid"):setMessage("Invalid loginid and passward")
        e.preventDefault()
    }
    return(
        <div>
        <h1>{message}</h1>
        <form onSubmit={disp}>
        Loing<input type="text" onChange={(e)=>setLog(e.target.value)}></input><br></br>
        passward<input type="passward" onChange={(e)=>setPass(e.target.value)}></input><br></br>
        <input type="submit"></input>
        </form>
        </div>
    )
}
export default Func30