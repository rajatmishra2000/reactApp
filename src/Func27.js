import Button from 'react-bootstrap/Button';
import{useState}from "react";
function Fucn27()
{
    const[data,setdata]=useState(false)
    function show()
    {
        setdata(true)
    }
    function Hide()
    {
        setdata(false)
    }
    return(
        <div>
            {
                data?<h1>Ram</h1>:<h1></h1>
            }
            
        <Button variant="secondary" onClick={show}>show</Button>{' '}
      <Button variant="success" onClick={Hide}>Hide</Button>{' '}
        </div>
    )
}
export default Fucn27