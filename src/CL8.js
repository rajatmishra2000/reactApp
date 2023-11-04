import {Component} from "react";
class CL8 extends Component
{
    constructor()
    {
        super()
        this.state=
        {data:"Ram",data1:"Seeta",data2:"Laxman"}
    }
    change()
    {
        this.setState({data:"Krishna"})
        this.setState({data1:"Radha"})
        this.setState({data2:"Balram"})
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
export default CL8