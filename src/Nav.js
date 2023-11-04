import{Link} from "react-router-dom"
function Nav()
{
    return(
        <div>
<Link to="/">Home</Link><br></br>
<Link to="/about">About</Link><br></br>
<Link to="/contact">Contact</Link><br></br>
<Link to="/*">Pagenot</Link><br></br>
</div>
    )
}
export default Nav