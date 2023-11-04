import{useState} from "react";
function Func215()
{
    const[name,setname]=useState("")
    const[country,setcountry]=useState("")
    const[check,setcheck]=useState(false)
    function change(e)
    {
        alert(name+country+check)
        e.preventDefault()
    }
    return(
        <div>
        <form onSubmit={change}>
    Enter Name:<input type="text"onChange={(e)=>setname(e.target.value)}></input><br></br>
    Select Country <br></br>
    <select onChange={(e)=>setcountry(e.target.value)}>
    <option>selecrcountry</option>
    <option>India</option>
    <option>England</option>
    <option>.U.S.A.</option>
    </select><br></br>
    <input type="checkbox"onChange={(e)=>setcheck(e.target.value)}></input><br></br>
    <input type="submit"></input>
    </form>
        </div>
    )
}
export default Func215