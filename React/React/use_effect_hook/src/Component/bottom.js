import {useState,useEffect} from 'react';
function Bottom(){
    const [count,setCount] = useState(0);

    useEffect(()=>{
     console.log("bottom Called");
    })
    return (
        <div onClick={()=>setCount(count+1)}>
            Bottom level {count} 
        </div>
    )
}
export default Bottom;