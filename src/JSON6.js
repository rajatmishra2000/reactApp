function JSON6(props1)
{
return(
    <div>
        {
            props1.data.map((item,i)=>
            <h1 key={i}>{item.custid} {item.mobileno}</h1>
            )
        }
    </div>
)
}
export default JSON6