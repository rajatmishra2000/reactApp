function Func222()
{
    var arr=[{empolyeecode:101,Name:"Rajat",Salary:20000},{empolyeecode:102,Name:"Shivam",Salary:300000},{empolyeecode:103,Name:"Harshit",Salary:4000}]
    return(
        <div>
        {
            arr.map((item,i)=>
          <h1 key={i}>{item.empolyeecode}{item.Name}{item.Salary}</h1>           
            )
        }
        </div>
    )
}
export default Func222