import {Component} from "react";
class CL102 extends Component
{
    constructor()
    {
        super()
        this.state=
        {data:10,data1:20,data2:30}
    }
    change()
    {
        this.setState({data:20})
        this.setState({data1:40})
        this.setState({data2:60})
    }
    render()
    {
        return(
            <div>
        <h1>{this.state.data}</h1>
        <h1>{this.state.data1}</h1>
        <h1>{this.state.data2}</h1>
        <button onClick={()=>this.change()}>ok</button>
            </div>
        )
    }
}
export default CL102