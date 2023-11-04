import{useState} from "react";
function Func14()
{
    const[data,setdata]=useState("Rajat")
    const[data1,setdata1]=useState("211 Govind colony indore")
    const[data2,setdata2]=useState(20000)
    function change()
    {
        setdata ("Shivam")
        setdata1 ("Marimata")
        setdata2 (50000)
    }
        return(
            <div>
            <h1>{data}</h1>
            <h1>{data1}</h1>
            <h1>{data2}</h1>
            <button onClick={change}>ok</button>
            </div>
        )
}
export default Func14