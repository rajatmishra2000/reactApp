import{useState} from "react"
function Func21(p)
{
const[data,setdata]=useState(p.name)
function change()
{
    setdata ("Seeta")
}
return(
    <div>
        <h1>{data}</h1>
        <button onClick={change}>ok</button>
    </div>
)
}
export default Func21
