import{useState} from "react";
import { propTypes } from "react-bootstrap/esm/Image";
function Func105(props)
{
    const[data,setdata]=useState(props.name)
    const[data1,setdata1]=useState(props.FatherName)
    const[data2,setdata2]=useState(props.MotherName)
    const[data3,setdata3]=useState(props.Address)
    const[data4,setdata4]=useState(props.Mobileno)
    function change()
    {
        setdata("Shyam")
        setdata1("Nandbaba")
        setdata2("Yashoda")
        setdata3("Marimata")
        setdata4("879898465")
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
export default Func105