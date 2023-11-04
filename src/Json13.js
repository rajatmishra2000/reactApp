function Json13(props2)
{
   return(
    <div>
    {
        props2.name.map((item,i)=>
        <h1 key={i}>{item.Rollno}{item.Name}{item.Percentage}</h1>
        )
    }
    </div>
   )
}
export default Json13