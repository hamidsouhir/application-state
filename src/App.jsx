
import "./App.css"

import React, { Component } from 'react'

import ToDoList from "./component/ToDoList";
import Head from "./component/Head";

export default class App extends Component {
state = {
  actToDo:[
  {id : Math.random(), toDo : 'practing sport',isDone: true},
  {id : Math.random(), toDo : 'go to study',isDone: false},
  {id : Math.random(), toDo : 'play video games',isDone: false},

],
newAdd :""
};
//to delete element
handelDelet = (id) =>{
  this.setState({actToDo:this.state.actToDo.filter(item =>item.id !==id)})
  
}

//to complete element
bar = (id)=>{
  this.setState({actToDo:this.state.actToDo.map(el=>el.id===id ?{...el,isDone:!el.isDone}:el)})

} 
//add new element in table



handelChange=(x)=>{
  this.setState({newAdd:x})
  console.log(x)
}

handelAdd=(newAdd)=>{
  const newEl={
    id :Math.random(),toDo:newAdd,isDone:false
};

    this.setState({actToDo:[...this.state.actToDo,newEl]});
}


render() {
    return (
      <div className="App">
        <Head newAdd={this.state.newAdd} 
        handelChange={this.handelChange} 
        handleSubmit={this.handleSubmit} 
        handelAdd={this.handelAdd}/>
        <ToDoList list={this.state.actToDo}  
        delet={this.handelDelet} barre={this.bar}/>
       
      

      
      </div>
    )
  }
}