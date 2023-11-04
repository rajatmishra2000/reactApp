import { Link } from "react-router-dom";
function Nav()
{
return(
    <div>
<Link to="/">Home1</Link>
<Link to="/about">About1</Link>
<Link to="/contact">Contact1</Link>
<Link to={"/*"}>Pagenotfound1</Link>
    </div>
)
}
export default Nav