import{useState} from "react";
function Func216()
{
    const[login,setlogin]=useState("")
    const[passward,setpassword]=useState("")
    const[message,setmessage]=useState("")
    function disp(e)
    {
        login=="RAM"?passward==="1234"?setmessage("Welcome"+login):setmessage("Invalid passward"):passward==="1234"?setmessage("Invalid loginid"):setmessage("loginid and passward both are different")
        e.preventDefault()
    }
    return(
        <div>
        <h1>{message}</h1>
    <form onSubmit={disp}>
    Enter loginid<input type="text"onChange={(e)=>setlogin(e.target.value)}></input><br></br>
    Enter passward<input type="password"onChange={(e)=>setpassword(e.target.value)}></input><br></br>
    <input type="submit"></input>
    </form>
        </div>
    )
}
export default Func216