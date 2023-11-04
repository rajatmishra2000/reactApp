import {Component} from "react";
class Class7 extends Component
{
    render()
    {
        return(
            <div>
            <h1>{this.props.name}</h1>
            <h1>{this.props.FatherName}</h1>
            <h1>{this.props.MotherName}</h1>
            <h1>{this.props.Address}</h1>
            </div>
        )
    }
}
export default Class7