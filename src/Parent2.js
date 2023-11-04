import Child2 from "./Child2"
function Parent2()
{
    function display(mname)
    {
        alert("Hello"+mname)
    }
    return(
        <div>
<Child2 name={display}></Child2>
        </div>
    )
}
export default Parent2