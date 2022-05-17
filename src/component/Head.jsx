import React from 'react'

function Head({newAdd,handelChange,handleSubmit,handelAdd}) {
    
    handleSubmit =(e)=>{
        e.preventDefault();handelAdd(newAdd)
      }   
  return (
    <div>
        <h1>list to do</h1>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder='add act' value={newAdd} onChange={(e)=>handelChange(e.target.value)}/>
          <button >add</button>
        </form>
    </div>
  )
}

export default Head