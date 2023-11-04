import{Component} from "react";
class CL15 extends Component
{
    render()
    {
        return(
            <div>
            <h1>Firstname{this.props.Firstname}</h1>
            <h1>Lastname{this.props.Lastname}</h1>
            <h1>Address{this.props.Address}</h1>   
            <h1>Mobileno{this.props.Mobileno}</h1>
            </div>
        )
    }
}
export default CL15