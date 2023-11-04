import {Component,createRef} from "react";
class Class103 extends Component
{
    constructor()
    {
        super()
        this.inref = createRef(null)    
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
    <button onClick={()=>this.change()}>ok</button>
            </div>
        )
    }
}
export default Class103