import{Component} from "react";
class CL7 extends Component
{
    constructor()
    {
        super()
        this.state=
        {data:"Rajat"}
    }
  change()
 {
    this.setState({ data:"Shivam"})
 }
 render()
 {
    return(
        <div>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.change()}>ok</button>
        </div>
    )
 }          
}
export default CL7