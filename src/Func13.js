import {useState} from "react";
function Func13()
{
const[d,s]=useState("Ram")
const[d1,s1]=useState("Krishna")
function change()
{
    s ("Seeta")
    s1 ("Radha")
}
return(
    <div>
        <h1>{d}</h1>
        <h1>{d1}</h1>
        <button onClick={change}>ok</button>
    </div>
)
}
export default Func13