import{useState} from "react";
function Func25()
{
   const[data,setdata]= useState("Ram")
   const[data1,setdata1]=useState("Krishna")
   function change()
   {
    setdata("Seeta")
    setdata1("Radha")
   }
   return(
    <div>
    <h1>{data}</h1>
    <h1>{data1}</h1>
    <button onClick={change}>ok</button>
    </div>
   )
}
export default Func25