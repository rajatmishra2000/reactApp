import Home from'./Home'
import Contact from'./Contact'
import About from'./About'
import Pagenotfound from'./Pagenotfound'
import Nav from'./Nav'
import{Routes,Route}from 'react-router-dom'
function Routing()
{
    return(
        <div>
    <Nav></Nav>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
    <Route path='/*' element={<Pagenotfound></Pagenotfound>}></Route>
    </Routes>
        </div>
    )
}
export default Routing