import {useState} from "react";
function Func103()
{
    const[name,setname]=useState("Ram")
    const[name1,setname1]=useState("Shyam")
function change()
{
   setname("Seeta")
   setname1("Radha")
}
return(
        <div>
            <h1>{name}</h1>
            <h1>{name1}</h1>
            <button onClick={change}>ok</button>
        </div>
    )
}
export default Func103