import { useState } from "react"

function HOC3()
{
    return(
<div>
<Redcomp cmp={counter}></Redcomp>
<Bluecomp cmp={counter}></Bluecomp>
</div>
    )
}
function Redcomp(props)
{
    return(
   <h1 style={{backgroundColor:"Yellow",width:"40px"}}>Red<props.cmp></props.cmp></h1>
 )
}
function Bluecomp(props)
{
    return(
<h1 style={{backgroundColor:"Yellow",width:"40px"}}>Blue<props.cmp></props.cmp></h1>
    )
}
function counter()
{
const[data,setdata] = useState(0)
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
export default HOC3