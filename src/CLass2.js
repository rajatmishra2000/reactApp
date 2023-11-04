import {Component} from "react";
import { render } from "react-dom";
class CLass2 extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            data1:10
        }
        console.log("Constructor is called");
    }
shouldComponentUpdate()
{
    console.log("Should componenet update is called");
    return true
}
render()
{
    console.log("Render is called");
    return(
        <div>
        <h1>{this.state.data1}</h1>
        <button onClick={()=> this.setState({data1:20})}>ok</button>
        </div>
    )
}
}
export default CLass2