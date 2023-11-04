import{useState} from "react";
function Func63()
{
    const[name,setname]= useState("")
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
    Enter your name <input type="text" onChange={(e)=>setname(e.target.value)}></input><br></br>
    select country <br></br>
    <select onChange={(e)=>setcountry(e.target.value)}>
      <option>selectCountry</option>
      <option>India</option>
      <option>Australia</option>
      <option>Newzlend</option>
      <option>Southafrica</option>  
    </select><br></br>
<input type="checkbox" onChange={(e)=>setcheck(e.target.value)}></input><br></br>
<input type="submit"></input>   
</form>
</div>
    )
}
export default Func63