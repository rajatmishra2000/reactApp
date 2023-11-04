import { Component } from "react";
class CL6 extends Component
{
    constructor()
    {
        super()
        this.state=
        { data1 : "Rajat",data2 : "Mishra"}
    }
    change()
    {
        this.setState({data1:"SAYAM"})
        this.setState({data2:"Mishra"})
    }
    render()
    {
        return(
            <div>
            <h1>{this.state.data1}</h1>
            <h1>{this.state.data2}</h1>
        <button onClick={()=>this.change()}>ok</button>
</div>
        )
    }
}
export default CL6