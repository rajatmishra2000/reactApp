import {Component,createRef} from "react";
class Ref3 extends Component
{
    constructor()
    {
        super()
        this.inref=createRef()
    }
    change()
    {
        this.inref.current.style.backgroundColor="Yellow"
        this.inref.current.style.color="aqua"
    }
    render()
    {
        return(
            <div>
            <input type="text" ref={this.inref}></input><br></br>
            <button onClick={()=>this.change()}>ok</button>
            </div>
            )
    }
}
export default Ref3