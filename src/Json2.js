function Json2()
{
    var student=[{Rollno:101,Name:"Ram",Marks:99},{Rollno:102,Name:"Shyam",Marks:99},{Rollno:103,Name:"Krishna",Marks:"99"}]
    return(
        <div>
            {
                student.map((item,i)=>
                <h1 key={i}>{item.Rollno}{item.Name}{item.Marks}</h1>
                )
            }
        </div>
    )
}
export default Json2