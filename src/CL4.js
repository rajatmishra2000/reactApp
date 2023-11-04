import{Component} from "react";
class CL4 extends Component
{
    constructor()
    {
        super()
        this.state=
        { data1 :20}
    }
    change()
    {
        this.setState({data1:30})
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.data1}</h1>
                <button onClick={()=>this.change()}>ok</button>
            </div>
        )
    }
    }
    export default CL4
