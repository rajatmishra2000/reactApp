function Json3()
{
    var empolyee=[{empolyeecode:101,empolyeename:"Ram",empolyeesalary:10000000000},{empolyeecode:102,empolyeename:"Shyam",empolyeesalary:10000000000},{empolyeecode:103,empolyeename:"Krishna",empolyeesalary:10000000000}]
    return(
        <div>
        <table border="double">
        <tr>
        <th>Empolyeecode</th>
        <th>EmpolyeeName</th>
        <th>EmpolyeeSalary</th>
        </tr>
        {
            empolyee.map((item,i)=>
            <tr>
            <td key={i}>{item.empolyeecode}</td>
            <td key={i}>{item.empolyeename}</td>
            <td key={i}>{item.empolyeesalary}</td>
            </tr>
            )
        }
        </table>
        </div>
    )
}
export default Json3