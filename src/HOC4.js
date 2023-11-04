import {useState} from "react";
function HOC4()
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
        <div>
    <h1 style={{backgroundColor:"Yellow",width:"40px"}}>Yellow<props.cmp></props.cmp></h1>
        </div>
    )
}
function Bluecomp(props)
{
    return(
        <div>
    <h1 style={{backgroundColor:"Green",width:"40px"}}>Green<props.cmp></props.cmp></h1>
        </div>
    )
}
function Counter()
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
export default HOC4