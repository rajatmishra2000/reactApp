import{Component} from "react";
class Func120 extends Component
{
    constructor()
    {
        super()
        this.state=
        {data:10}
    }
    change()
    {
        this.setState({data:20})
    }
    render()
    {
        console.log("render is a called");
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.change()}>ok</button>
            </div>
        )
    }
}
export default Func120