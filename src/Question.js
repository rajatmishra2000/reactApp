function Question(p)
{
    return(
        <div style={{backgroundColor: "skyblue",margin:10,border:"2px solid yellow"}}>
        <h2>Hello {p.name}</h2>
        <h2>{p.email}</h2>
        <h2>Address:{p.other.Address}</h2>
        <h2>mobileno:{p.other.mobileno}</h2>
        </div>
    )
}
export default Question