import{Component} from "react";
class CL104 extends Component
{
    render()
    {
        return(
            <div>
    <h1>{this.props.name}</h1>
    <h1>{this.props.FatherName}</h1>
    <h1>{this.props.MotherName}</h1>
    <h1>{this.props.Address}</h1>
    <h1>{this.props.Mobileno}</h1>
            </div>
        )
    }
}
export default CL104