import{Component} from "react";
class Func208 extends Component
{
    constructor()
    {
        super()
        this.state=
        {data:20,data1:40}
    }
    change()
    {
        this.setState({data:40,data1:80})
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.data}</h1>
                <h1>{this.state.data1}</h1>
                <button onClick={()=>this.change()}>ok</button>
            </div>
        )
    }
}
export default Func208