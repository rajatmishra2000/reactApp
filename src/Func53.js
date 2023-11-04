function Func53(props1)
{
    return(
        <div>
            {
        props1.data.map((item,i)=>
        <h1 key={i}>{item.empolyeecode}{item.Name}{item.salary}</h1>
        )
            }
        </div>
    )
}
export default Func53