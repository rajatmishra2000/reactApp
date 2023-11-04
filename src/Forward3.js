import{forwardRef,useRef} from "react"
function Forward3(props,ref)
{
    return(
        <div>
<input type="text" ref={ref}></input>
        </div>
    )
}
export default forwardRef (Forward3)