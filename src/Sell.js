function Sell()
{
    var sell = 6000;
    var discount = sell*5/100
    var Netamount = sell-discount
    return(
        <div>
         <h1>{discount}</h1>
         <h1>{Netamount}</h1>
         </div>
    )
}
export default Sell