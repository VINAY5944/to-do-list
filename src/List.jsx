import React, { useState } from 'react'
import './list.css'
import Td from './Td';

function List() {
  const [todo,setTodo]=useState("")
  const [todos,setTodos]=useState([])
  function m (event){
setTodo(event.target.value);
  } 




  function h(){ 
    if(todo===""){
    setTodos(()=>{
      return[...todos]
    })
    setTodo ("")
  }


  else {
    setTodos(()=>{
      return[...todos,todo]
    })
    setTodo ("")
  }
}

   
 
  


  function f (id){
    console.log(id)
    setTodos((val)=>{
      return val.filter((elem,indx)=>{
      return indx !==id
      })

    })
    }
 
  console.log(todos)
  return (
    <div className='main'>
        
        <div className="box">
 ToDo List
 <div>
    <input type="text" placeholder='what?' className='inp' onChange={m} value={todo}/>




    <button className='btn' onClick={h}>+</button>
 </div>
 <div>
  <ol>
    {todos.map((l,index)=>{
      return(
       <Td text={l} id={index} key={index} onSelect={f}  />
    
   ) })}
    
  </ol>
 </div>
        </div>
    </div>
  )
}

export default List