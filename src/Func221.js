function Func221()
{
    var student = [{Rollno:101,Name:"Ram",marks:80},{Rollno:102,Name:"Shivam",marks:78},{Rollno:103,Name:"Harshit",marks:75}]
    return(
        <div>
         {
            student.map((item,i)=>
    <h1 key={i}>{item.Rollno}{item.Name}{item.marks}</h1>
            )
         }   
        </div>
    )
}
export default Func221