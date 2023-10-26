import React ,{useEffect}from 'react'
export const A = ({name}) => {
    const message = `Hello ,${name}`;

    console.log(`Render <A name="${name}"/>`);

    useEffect(()=>{
     document.title = "Greeting page";
     console.log("side-effects RUNS!");
    },[]);

  return <div>{message}</div>;
  
}
