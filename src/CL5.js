import{Component} from "react";
class CL5 extends Component
{
    constructor()
    {
        super()
        this.state=
       { data1 : 20,data2 :30}
    }
    change()
    {
        this.setState({data1:40,data2:60})
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.data1}</h1>
                <h1>{this.state.data2}</h1>
                <button onClick={()=>this.change()}>ok</button>
            </div>
        )
    }
}
export default CL5