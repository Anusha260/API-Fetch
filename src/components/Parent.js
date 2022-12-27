import React,{useState} from 'react'
import Child from './Child';
function App() {
const [count,setCount]=useState(100)
const [arr,setArr]=useState([1,2,3,4,5])
  return(
   
    <Child count={count} setCount={setCount} arr={arr}/>
   
  )
}
export default App; 