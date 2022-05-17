

import React from 'react'
import PartList from './PartList'

function toDoList({list,delet,barre,acte}) {
  console.log(list)
  return (
    <div>
     {
     list.map(el => <PartList task={el} delet={delet} list={list} barre={barre} acte={acte}/>)
    }
    </div>
  )
}

export default toDoList
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  