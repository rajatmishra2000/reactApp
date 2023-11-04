function JSON1()
{
   var student=[{Roll:101,Name:"Ravi",Marks:80},{Roll:102,Name:"Riti",Marks:75},{Roll:103,Name:"Kriti",Marks:80}]

   student.map((v)=>{
    console.log('hghgh',v);
   })

   return(
    <div>
        {
            student.map((item,i)=>
            <h1 key={i}>{item.Roll}{item.Name}{item.Marks}</h1>
            )
        }
    </div>
   )
}
export default JSON1