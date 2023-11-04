import{Component} from "react";
class CL10 extends Component
{
    render()
    {
        return(
            <div>
            <h1>FirstName:{this.props.FirstName}</h1>
            <h1>LastName:{this.props.LastName}</h1>
            <h1>Address:{this.props.Address}</h1>
            <h1>Mobileno:{this.props.Mobileno}</h1>
            </div>
        )
    }
}
export default CL10