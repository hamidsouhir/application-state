import React from 'react'

function PartList({task,delet,barre}) {
    console.log(delet)
    console.log(barre)
  return (
    <div>
           <h2 className={task.isDone?"done":""}>{task.toDo}</h2>
       <button onClick={()=>delet(task.id)}>delete</button>
       <button onClick={() =>barre(task.id)}>isDone</button>

    </div>
  )
}

export default PartList