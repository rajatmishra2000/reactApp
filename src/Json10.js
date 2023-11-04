function Json10()
{
    var empolyee = [{code:101,Name:"Ram",salary:10000000},{code:102,Name:"Shyam",salary:20000000},{code:103,Name:"krishna",salary:30000000}]
    return(
        <div>
        <table border="2px solid double">
          <tr>
            <th>code</th>
            <th>Name</th>
            <th>salary</th>
          </tr>
            {
            empolyee.map((item,i)=>
            <tr>
            <td key={i}>{item.code}</td>
            <td key={i}>{item.Name}</td>
            <td key={i}>{item.salary}</td>
            </tr>
            )
            }
        </table>
        </div>
    )
}
export default Json10