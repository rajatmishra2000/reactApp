import{useState} from "react";
function Func31()
{
  const[name,setname]=useState("")
  const[country,setcountry]=useState("")
  const[check,setcheck1]=useState(false)
  function disp(e)
  {
    alert(name+country+check)
     e.preventDefault()    
  }
  return(
    <div>
    <form onSubmit={disp}>
Name<input type="text" onChange={(e)=>setname(e.target.value)}></input><br></br>
Select country name<br></br>
<select onChange={(e)=>setcountry(e.target.value)}>
<option>select country</option>
<option>India</option>
<option>Srilanka</option>
<option>Banaladesh</option>
<option>Australia</option>
</select><br></br>
<input type="checkbox" onChange={(e)=>setcheck1(e.target.value)}></input><br></br>
<input type="submit"></input>
    </form>
    </div>
  )
}
export default Func31