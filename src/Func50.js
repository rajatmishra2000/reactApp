import {useState}from "react";
function Func50()
{
    const[Name,setname]=useState("")
    const[country,setcountry]=useState("")
    const[check,setcheck]=useState(false)
function disp(e)
{
  alert(Name+country+check)
   e.preventDefault()
}
    return(
        <div>
         <form onSubmit={disp}>   
        Enter Name<input type="text" onChange={(e)=>setname(e.target.value)}></input><br></br>
        select country<br></br>
        <select onChange={(e)=>setcountry(e.target.value)}>
        <option>selectcountry</option>
        <option>India</option>
        <option>.U.S.A.</option>
        <option>Australia</option>
        </select> <br></br>
        <input type="checkbox" onChange={(e)=>setcheck(e.target.value)}></input> <br></br>
        <input type="submit"></input>
        </form>
        </div>
    )
}
export default Func50