import{useState} from "react";
function Func62()
{
const[data,setdata]=useState(false)
function show()
{
     setdata(!data)
}
if(data == true)
{
    return(
        <div>
        <h1>Ram</h1>
        <button onClick={show}>toggle</button>
        </div>
    )
}
else
{
    return(
        <div>
        <h1></h1>
    <button onClick={show}>toggle</button>
        </div>
    )
}
}
export default Func62
