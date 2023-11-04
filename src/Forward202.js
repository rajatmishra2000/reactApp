import {forwardRef} from "react";
function Forward202(props,ref)
{
    return(
        <div>
<input type="text" ref={ref}></input>
        </div>
    )
}
export default forwardRef(Forward202)