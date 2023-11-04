import {Component} from "react";
class Class1 extends Component
{
    constructor()
    {
        super()
        console.log("Constructor is a called");
    }
    render()
    {
        console.log("render is a called");
        return(
            <h1>Hello</h1>
        )
    }
    componentDidMount()
    {
        console.log("ComponeneDidMount is a called");
    }
}
export default Class1