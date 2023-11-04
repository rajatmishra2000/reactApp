import{useState}from "react";
function Func29()
{
    const[name,setname]=useState("")
    const[country,setcountry]=useState("")
    const[check1,setcheck1]=useState("")

function display(e)
{
   alert(name+country+check1)
   e.preventDefault()
}
return(
    <div>
    <form onSubmit={display}>
    Enter Name<input type="text" onChange={(e)=>setname(e.target.value)}></input><br></br>
    select country <br></br>
    <select onChange={(e)=>setcountry(e.target.value)}>
    <option>select country</option>
    <option>India</option>
    <option>Japan</option>
    <option>China</option>
    </select><br></br>
    select checkbox <br></br>
    <input type="checkbox"onChange={(e)=>setcheck1(e.target.value)}></input><br></br>
    <input type="submit"></input>
    </form>
    </div>
)
}
export default Func29