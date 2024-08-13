import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import handleOtherMethod from './utils/helper'

function App() {
  const [data, setData] = useState([])

 const getData = async () => {
  let result = await fetch("https://jsonplaceholder.typicode.com/users");
  result = await result.json();
  setData(result)
 }
 
 useEffect(() => {
  getData()
 }, [])

 {console.log(data);
 }
  return (
   <div>
    <h1>API CALL</h1>
  <ul>
    {data.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
    </ul>
   </div>
  )
}

export default App
