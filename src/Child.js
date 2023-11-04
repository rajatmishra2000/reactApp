function Child(props1)
{
    var mname = "Chinu"
    function change()
    {
        props1.name(mname)
    }
    return(
        <div>
        <button onClick={change}>ok</button>
        </div>
    )
}
export default Child