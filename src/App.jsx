import React, { useState } from 'react'
import TopBar from './components/TopBar'
function App() {
  let [todo,setTodo]=useState([
    {
    id:1,
    title:" Office Task-1",
    description:"This is the description for my First task",
    status:true

  },
  {
    id:2,
    title:" Office Task-2",
    description:"This is the description for my Second task",
    status:false
    
  },
  {
    id:3,
    title:" Office Task-3",
    description:"This is the description for my Third task",
    status:true
    
  }
])
let [completed,setCompleted]=useState("All")
  return <>
  <TopBar todo={todo} setTodo={setTodo} completed={completed} setCompleted={setCompleted}/>
  
  </>
}

export default App