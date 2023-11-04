import {useState} from "react";
function HOC2()
{
    return(
        <div>
    <Redcom cmp={Counter}></Redcom>
    <Bluecom cmp={Counter}></Bluecom>
    </div>
    )
}
function Redcom(props)
{
    return(
        <h1 style={{backgroundColor:"Yellow",width:"40px"}}>Red<props.cmp></props.cmp></h1>
    )
}
function Bluecom(props)
{
    return(
        <h1 style={{backgroundColor:"Yellow",width:"50px"}}>Blue<props.cmp></props.cmp></h1>
    )
}
function Counter()
{
    const[data,setdata]=useState(0)
    function change()
    {
        setdata(data+1)
    }
    return(
        <div>
    <h1>{data}</h1>
    <button onClick={change}>ok</button>
        </div>
    )
}
export default HOC2