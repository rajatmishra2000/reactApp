import{useState} from "react";
function HOC()
{
    return(
        <div>
        <Redcomp cmp={Counter}></Redcomp>
        <Bluecomp cmp={Counter}></Bluecomp>
        </div>
    )
}
function Redcomp(props)
{
    return(  
    <h1 style={{backgroundColor:"Yellow",width:"100px"}}>Red<props.cmp></props.cmp></h1>
    )
}
function Bluecomp(props)
{
    return( 
    <h1 style={{backgroundColor:"aqua",width:"40px"}}>Blue<props.cmp></props.cmp></h1>
    )
}
function Counter()
{
    const[data,setdata]=useState(0)
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={()=>setdata(data+1)}>ok</button>
        </div>
    )
}
export default HOC