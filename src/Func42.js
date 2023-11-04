function Func42()
{
    var a = 100
    var b = 80
    var c = 20
    var d = b+c
    var name = "Ram"
    function change()
    {
    name="Seeta"
    alert(name)
    }
    return(
        <div>
            <h1>FatherName:Santosh mishra</h1>
            <h1>MotherName:Ritu mishra</h1>
            <h1>Address:211 Govind Colony Indore</h1>
            <h1>Mobileno:965464512</h1>
            <h1>{a}</h1>
            <h1>{d}</h1>
            <h1>{name}</h1>
            <button onClick={change}>ok</button>
        </div>
    )
}
export default Func42