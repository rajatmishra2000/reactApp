import{useState} from "react";
function Func110()
{
   const[name,setname]=useState("")
   const[country,setcountry]=useState("")
   const[check,setcheck]=useState(false)
function display(e)
{
   alert(name+country+check)
   e.preventDefault()
}
   return(
      <div>
    <form onSubmit={display}>
    Enter Name<input type="text" onChange={(e)=>setname(e.target.value)}></input><br></br>
    select country <br></br>
    <select onChange={(e)=>setcountry(e.target.value)}>
    <option>Select Country</option>
    <option>India</option>
    <option>Australia</option>
    <option>NewZelend</option>
    <option>SouthArica</option>   
    </select><br></br>
    <input type="checkbox"onChange={(e)=>setcheck(e.target.value)}></input><br></br>
    <input type="Submit"></input>
    </form>
    </div>
   )
}
export default Func110