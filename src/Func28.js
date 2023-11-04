import{useState} from "react";
function Fucn28()
{
    const[data,setdata]=useState(false)
    function change()
    {
        setdata(!data)
    }
    return(
        <div>
            {
        data?<h1>RAM</h1>:<h1></h1>
            }
        <button onClick={change}>Toggle</button>
        </div>
    )
}
export default Fucn28