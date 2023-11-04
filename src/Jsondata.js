import{useEffect,useState} from "react";
import "./App.css"
function Jsondata()
{
    const[data,setData]=useState([]);
    const fetchdata=()=>
    {
        fetch("https://dummyjson.com/products")
        .then((response)=>response.json())
        .then((actualdata)=>
        {
            console.log(actualdata);
            setData(actualdata.products)
        }
        )
    
    .catch((err)=>
    {
        console.log(err.message);
    }
    );
};
useEffect(()=>
{
    fetchdata();

},
[]);
return(
<div className="App">
<table>
<tbody>
<tr>
<th>Name</th>
<th>Brand</th>
<th>Image</th>
<th>Price</th>
<th>Rating</th>    
</tr>
{
    data.map((item,index)=>
<tr key={index}>
<td>{item.title}</td>
<td>{item.brand}</td>
<td><img src={item.thumbnail}alt=""height={100}></img></td>
<td>{item.price}</td>
<td>{item.rating}</td>
</tr>
)
}    
</tbody>    
</table>
</div>    
);
}
export default Jsondata;