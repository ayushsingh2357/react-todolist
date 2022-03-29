import React from 'react'

export const Todoitem = ({ todo, onDelete }) => {
  return (
    <>
    <div>
      <h4 className='mt-4'>{todo.title}</h4>
      <p className='my-2'>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>onDelete(todo)}>Delete</button>
      
    </div>
    <hr/>
    </>
    
  )
}
