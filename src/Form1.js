import{useState} from "react";
function Form1()
{
    const[Name,setName]=useState("")
    const[address,setaddress]=useState("")
    const[Mobileno,setMobileno]=useState("")
    const[Date,setDate]=useState("")
    const[salary,setsalary]=useState(0)
    const[Gender,setGender]=useState(false)
    function display(e)
    {
        alert(Name+address+Mobileno+Date+salary+Gender)
        e.preventDefault()
    }
    return(
       <div style={{backgroundColor:"Yellow",color:"Green"}}>
        <form onSubmit={display}>
    Name<input type="text" onChange={(e)=>setName(e.target.value)}></input><br></br>
    address<textarea onChange={(e)=>setaddress(e.target.address)}></textarea><br></br>
    Mobileno<input type="number" onChange={(e)=>setMobileno(e.target.value)}></input><br></br>
    Date of Birth<input type="date" onChange={(e)=>setDate(e.target.value)}></input><br></br>
    salary<input type="text" onChange={(e)=>setsalary(e.target.value)}></input><br></br>
    select Gender <br></br>
    Male<input type="radio" onChange={(e)=>setGender(e.target.value)}></input>
    FeMale<input type="radio" onChange={(e)=>setGender(e.target.value)}></input><br></br>
    <input type="submit"></input>
        </form>
       </div> 
    )
}
export default Form1