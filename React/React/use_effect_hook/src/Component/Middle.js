import React,{useState,useEffect} from 'react'


export const Middle = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("middle Rendered")
    })
    const middleFun=()=>{
        setCount(count+1);
    }
  return (
    <div> Middle
    <div onClick={middleFun}>Middle level {count}</div>
    {/* <Bot/> */}
    </div>
  )
}
