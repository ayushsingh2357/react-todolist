import React, { useState } from 'react';

export const AddTodo = (props) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const submit = () => {
    return (
      <div>addTodo</div>
    )
  }

  return (
    <div className='container'>
      <h3 className='my-2 text-center'>Add a todo</h3>
      <form>
        <div className="mb-3">
          <label for="title" className="form-label">Todo Title</label>
          <input type="text" className="form-control" id="title" aria-describedby="emailHelp" value={title} onChange={(e) => { settitle(e.target.value) }} />
        </div>
        <div className="mb-3">
          <label for="desc" className="form-label">Todo Description</label>
          <input value={desc} type="text" className="form-control" id="descr" onChange={(e) => { setdesc(e.target.value) }} />
        </div>
        <button type="submit" className="btn btn-sm btn-success">Submit</button>
      </form>
    </div>
  )
}
