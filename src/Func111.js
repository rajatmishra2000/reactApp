import{useState} from "react";
function Func111()
{
    const[login,setlog]=useState("")
    const[pass,setpass]=useState("")
    const[message,setmessage]=useState("")
    function display(e)
    {
       if(login === "Ram" &&   pass ==="123")
       {
        return(
            <div>
            {
                setmessage("Welcome"+login)
                
            }
            {e.preventDefault()}
            </div>
        )
       }   
       else
       if(login ==="Ram"  &&     pass !=="123")
       {
        return(
            <div>
                {
                    setmessage("Invalid passward")
                    
                }
                {e.preventDefault()}
            </div>
        )
       }
       else
       if(login !=="Ram"  &&    pass==="123")
       {
        return(
            <div>
                {
                    setmessage("Invalid login")
                }
                {e.preventDefault()}
            </div>
        )
       }
       else
       if(login  !=="Ram" &&  pass!=="123")
       {
        return(
            <div>
                {
                    setmessage("Invaild loginid and Invalid passward")
                }
                {e.preventDefault()}
            </div>
        )
       }
    }
      return(
        <div>
        <h1>{message}</h1>
        <form onSubmit={display}>
       Enter Your login<input type="login" onChange={(e)=>setlog(e.target.value)}></input><br></br>
       Enter Your passward<input type="password" onChange={(e)=>setpass(e.target.value)}></input><br></br>
       <input type="Submit"></input>
        </form>
        </div>
      )
    }
    export default Func111