import {Component,PureComponent}from "react";
class CL21 extends PureComponent
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
        this.setState({data:1})
    }
    render()
    {
        console.log("render is  a called");
    return(
        <div>
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.change()}>ok</button>
        </div>
    )
    } 
}
export default CL21