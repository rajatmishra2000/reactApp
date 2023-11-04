function Func117(props)
{
    return(
        <div>
         {
            props.data.map((item,i)=>
            <h1 key={i}>{item.code}{item.name}{item.salary}</h1>
            )
         }
        </div>
    )
}
export default Func117