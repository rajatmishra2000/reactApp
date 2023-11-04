import{useState} from "react";
function Func206()
{
    const[name,setname]=useState("Ram")
    const[name1,setname1]=useState("Shyam")
    function change()
    {
        setname("Raghav")
        setname1("Krishna")
    }
    return(
        <div>
        <h1>{name}</h1>
        <h1>{name1}</h1>
        <button onClick={change}>ok</button>
        </div>
    )
}
export default Func206