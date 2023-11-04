import Funcchild from "./Funcchild"
function Funcparent()
{
    function display(mname)
    {
        //alert("Hello"+mname)
        <h1>{"Hello"+mname}</h1>*
    }
    return(
        <div>
    <Funcchild name={display}></Funcchild>
        </div>
    )
}
export default Funcparent