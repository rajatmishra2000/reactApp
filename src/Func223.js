function Func223()
{
    var arr=[{empolyeecode:101,Name:"Rajat",Salary:20000},{empolyeecode:102,Name:"Shivam",Salary:30000},{empolyeecode:103,Name:"Harshit",Salary:4000}]
    return(
        <div>
    <table border="double" align="center">
    <tr>
    <th>empolyeecode</th>
    <th>Name</th>
    <th>Salary</th>
    </tr>
    {
        arr.map((item,i)=>
<tr>
<td key={i}>{item.empolyeecode}</td>
<td key={i}>{item.Name}</td>
<td key={i}>{item.Salary}</td>
</tr> 
)
}
</table>
</div>
    )
}
export default Func223