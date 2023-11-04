import{Component} from "react";
class Func207 extends Component
{
    constructor()
    {
     super()
     this.state=
     {data:10}
    }
    Change()
    {
        this.setState({data:20})
    }
    render()
    {
        return(
            <div>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.Change()}>ok</button>
            </div>
        )
    }
}
export default Func207