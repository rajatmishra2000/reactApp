import {Component} from "react";
class CL106 extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            data:10
        }
       console.log("Constructor are called");
    }
    shouldComponentUpdate()
    {
        console.log("Should Component Update is a called");
        return  true
    }
    change()
    {
        this.setState({data:20})
    }
    render()
    {
      console.log("Render are called");
      return(
        <div>
    <h1>{this.state.data}</h1>
    <button onClick={()=>this.change()}>ok</button>
        </div>
      )
    }
componentDidMount()
{
    console.log("ComponentDidMount are a called");
}
componentDidUpdate()
{
    console.log("Component Did Update is a called");
}
}
export default CL106