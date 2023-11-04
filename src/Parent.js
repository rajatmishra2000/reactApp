import Child from './Child'
function Parent()
{
    function display(mname)
    {
       alert("Hello"+mname)
    }
    return(
        <div>
    <Child name={display}></Child>
    </div>
    )
}
export default Parent