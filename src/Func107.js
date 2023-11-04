import{useState} from "react";
function Func107()
{
    const[data,setdata]= useState(false)
function change()
{
   setdata(!data)
}
if(data == true)
{
    return(
        <div>
        <h1>Ram</h1>
        <button onClick={change}>toggle</button>
        </div>   
        )
}
else
{
    return(
    <div>
    <h1></h1>
    <button onClick={change}>toggle</button>
</div>
    )
}
}
export default Func107