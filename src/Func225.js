function Func225(props)
{
    return(
        <div>
        {
            props.data.map((item,i)=>
    <h1 key={i}>{item.empolyeecode}{item.Name}{item.Salary}</h1> 
    )
}
</div>
    )
}
export default Func225