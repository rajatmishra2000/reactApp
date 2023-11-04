function Child2(props)
{
    var mname = "Chinu";
    function Change()
    {
       props.name(mname);
    }
    return(
        <div>
    <button onClick={Change}>ok</button>
        </div>
    )
}
export default Child2