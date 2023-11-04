function JSON5()
{
    var emp =[{empolyeecode:101,Name:"Niti",salary:5000},{empolyeecode:101,Name:"priti",salary:5000},{empolyeecode:101,Name:"kriti",salary:5000}]
    return(
        <div>
            <table border="double" align="center">
             <tr>
                <th>empolyeecode</th>
                <th>Name</th>
                <th>salary</th>
             </tr>
             {
                emp.map((item,i)=>
                <tr>
                    <td key={i}>{item.empolyeecode}</td>
                    <td key={i}>{item.Name}</td>
                    <td key={i}>{item.salary}</td>
                </tr>)
}            
</table>
</div>
    )
}
export default JSON5