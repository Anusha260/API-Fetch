import React,{useEffect,useState} from "react"
import './App.css';

function App() {
  const[data,setData]=useState([])
  const getData=async()=>{
    const response=await fetch(`https://jsonplaceholder.typicode.com/users`)
    const result=await response.json();
    setData(result)
    console.log(data)
  }
  useEffect(()=>{
    getData()
    console.log(data)
  },[])
  return (
    <div className="App">
      <h1>Users data</h1>
      <div>
     
      <table>
        <tr>
          <th>name</th>
          <th>username</th>
          <th>email</th>
          <th>city</th>
          <th>zipcode</th>
          <th>phone number</th>
          <th>Company nme</th>
          
        </tr>
     
      
      {
        data.map((item,index)=>{
          return(
           
             
                
                <tr>
                  {/* <td><h3>{item.id}</h3></td> */}
                  <td><p>{item.name}</p></td>
                  <td><p>{item.username}</p></td>
                  <td><p>{item.email}</p></td>
                  <td><p>{item.address.city}</p></td>
                  <td><p>{item.address.zipcode}</p></td>
                  <td><p>{item.phone}</p></td>
                  <td><p>{item.company.name}</p></td>
              </tr>
             
            
          )
        })
      }
     </table>
     </div>
    </div>
  );
}

export default App;


