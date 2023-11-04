import {Component} from "react";
class Class202 extends Component
{
    constructor()
    {
        super()
        this.state=
        ({data:0})
    }
    change()
    {
        this.setState({data:this.state.data+1})
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
export default Class202