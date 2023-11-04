import{Component, createRef} from "react";
class Class204 extends Component
{
    constructor()
    {
        super()
        this.inref=createRef()
    }
    change()
    {
        this.inref.current.style.backgroundColor="Yellow"
        this.inref.current.style.color="Green"
    }
    render()
    {
        return(
            <div>
    <input type="text" ref={this.inref}></input><br></br>
    <button onClick={()=>this.change()}>ok</button><br></br>
            </div>
        )
    }
}
export default Class204