import React ,{useEffect,useState} from 'react';
import './App.css';
import { A } from './Component/hook';
const names= ["Eric","react","buttelers"];
function App() {

  const [index ,setIndex ] = useState(0);

  useEffect(()=>{
 if(index === names.length-1){
  return ;
 }
 setTimeout(()=>setIndex(index + 1),1000);
  },[index]);
  return <A name={names[index]}/> 
}

export default App;
