function Func204()
{
    var name = "Ram"
    function change()
    {
       name = "Shyam"
       alert(name)
    }
    return(
        <div>
        <h1>{name}</h1>
        <button onClick={change}>ok</button>
        </div>
    )
}