function Func102()
{
    var Name = "Ram"
    function change()
    {
        Name="Shayam"
        alert("Shayam")
    }
    return(
        <div>
        <h1>{Name}</h1>
        <button onClick={change}>ok</button>
        </div>
    )
}
export default Func102