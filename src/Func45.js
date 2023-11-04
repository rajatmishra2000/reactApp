import {Component} from "react";
class Func45 extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            data:"Ram",
            data1:"Krishana"
        }
    }
     change()
     {
        this.setState({data:"Seeta"})
        this.setState({data1:"Radha"})
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
export default Func45