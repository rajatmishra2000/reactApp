import {useState} from "react"
function Func47(p)
{
    const[data,setdata]=useState(p.Name)
    const[data1,setdata1]=useState(p.FatherName)
    const[data2,setdata2]=useState(p.MotherName)
    const[data3,setdata3]=useState(p.Address)
    const[data4,setdata4]=useState(p.Mobileno)
    function change()
    {
       setdata("Shivasn Mishra")
       setdata1("Saket Mishra")
       setdata2("Nisha Mishra")
       setdata3("New Govind Colony Indore")
       setdata4("941412132")
    }
    return(
        <div>
       <h1>{data}</h1>
       <h1>{data1}</h1>
       <h1>{data2}</h1>
       <h1>{data3}</h1>
       <h1>{data4}</h1>
       <button onClick={change}>ok</button>
        </div>
    )
}
export default Func47