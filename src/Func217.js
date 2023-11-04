import{Component} from "react";
class Func217 extends Component
{
    constructor()
    {
        super()
        this.state=
        {data:0}
        console.log("Constructor is a called");
    }
    shouldComponentUpdate()
    {
        console.log("Should component update is a called");
        return true
    }
    render()
    {
        console.log("Render is a called");
        return(
            <div>
              <h1>{this.state .data}</h1>
              <button onClick={()=>this.setState({data:10})}>ok</button>
            </div>
        )
    }
    componentDidMount()
    {
        console.log("Component Did mount is a update");
    }
    componentDidUpdate()
    {
        console.log("ComponentDidUpdate is a update");
    }
}
export default Func217