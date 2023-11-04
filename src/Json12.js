import Json13 from './Json13'
function Json12()
{
    var student = [{Rollno:101,Name:"Ram",Percentage:99.99},{Rollno:102,Name:"Shyam",Percentage:99.99},{Rollno:103,Name:"Krishna",Percentage:99.99}]
return(
    <div>
        <Json13 name={student}></Json13>
    </div>
)
}
export default Json12