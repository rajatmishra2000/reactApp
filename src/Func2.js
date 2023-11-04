function Func2()
{
    var mname = "Shubhangi"
    function change()
    {
        mname = "vrushali"
        alert(mname)
    }
    return(
        <div>
            <h1>{mname}</h1>
        <button onClick={change}>ok</button>
        </div>
    )
}
export default Func2