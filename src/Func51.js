import {useState}from "react";
import { render } from "react-dom";
function Func51()
{
    const[login,setlog]= useState("")
    const[passward,setpassward]= useState("")
    const[message,setmessage]= useState("")
    function disp(e)
    {
        login==="RAM"?passward==="123"?setmessage("welcome"+login):setmessage("Invalid passward"):passward==="123"?setmessage("Invalid loginid"):setmessage("Invalid logindi and Invalid passward")
        e.preventDefault()
    }
    return(
       <div>
        <h1>{message}</h1>
        <form onSubmit={disp}>
        Enter loginid<input type="text" onChange={(e)=>setlog(e.target.value)}></input><br></br>
        Enter passward<input type="passward" onChange={(e)=>setpassward(e.target.value)}></input><br></br>
        <input type="submit"></input><br></br>
        </form>
       </div> 
    )
}
export default Func51