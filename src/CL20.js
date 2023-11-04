import {Component,PureComponent} from "react";
class CL20 extends  PureComponent
{
    constructor()
    {
        super()
        this.state=
        {
            data:0
        }
    }
    render()
    {
        console.log("render is a called");
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.setState({data:1})}>ok</button>
            </div>
        )
    }
}
export default CL20