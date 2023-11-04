import JSON6 from "./JSON6"

function JSON4()
{
    var Custmore=[{custid:101,mobileno:5454654},{custid:102,mobileno:6454156},{custid:103,mobileno:6546454}]
    return(
        <div>
        <JSON6 data={Custmore}></JSON6>
         </div>
    )
}
export default JSON4