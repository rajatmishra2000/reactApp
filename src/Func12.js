function Func12()
{
    var mname = "Rajat"
  
    
  function change()
  {
    mname = "Shivam"
    alert(mname)
  }
    return(
        <div>
        <h1>{mname}</h1>
        <button onClick={change}>ok</button>
        </div>
    )
}
export default Func12