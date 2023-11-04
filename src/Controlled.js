import{useState}from"react"
function Controlled()
{
   const[num,setnum] = useState("Seeta")
   return(
      <div>
         <h1>{num}</h1>
      <input type="text" value={num}onChange={(e)=>setnum(e.target.value)}></input>
      </div>
   )
}
export default Controlled