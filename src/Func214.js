import{useState} from "react";
function Func214()
{
     const[data,setdata]=useState(false)
     function change()
     {
        setdata(!data)
     }
     return(
        <div>
        {
            data?<h1>Ram</h1>:<h1></h1>
        }
        <button onClick={change}>toggle</button>
        </div>
     )
}
export default Func214