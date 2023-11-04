import {Component}from "react";
class Class8 extends Component
{
    constructor()
    {
    super()
    this.state=
    {
        data:10
    }
    console.log("Constructor is a called");
    }
    componentDidMount()
    {
        console.log("Component did mount is a called");
    }
   
    shouldComponentUpdate()
    {
       console.log("Should component update is a called");
       return true
    }
    render()
    {
        console.log("rendre is a called");
        return(
            <div>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.setState({data:20})}>ok</button>
            </div>
        )
    }
componentDidUpdate()
{
    console.log("Component did update is a called");
}
}
export default Class8