import {Component} from "react";
class Class10 extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            data:0
        }
    }
    change()
    {
        this.setState({data:this.state.data+1})
    }
    shouldComponentUpdate()
    {
        console.log("Should compnent update is a called");
        if(this.state.data>5 && this.state.data<10)
        {
       return true
        }
    }
    render()
    {
        return(
            <div>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.change()}>data</button>
            </div>
        )
    }
}
export default Class10