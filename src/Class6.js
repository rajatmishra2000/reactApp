import {Component}from "react";
class Class6 extends Component
{
    render()
    {
        return(
            <div>
             <h1>{this.props.NAME}</h1>
             <h1>{this.props.FATHERNAME}</h1>
             <h1>{this.props.MOTHERNAME}</h1>
             <h1>{this.props.Address}</h1>
             <h1>{this.props.Mobileno}</h1>
            </div>
        )
    }
}
export default Class6