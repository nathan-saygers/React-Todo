import React from 'react'

const Todo = props => {
  console.log(props.toDoItem.completed);

  return (
    <div onClick={() => props.toggleComplete(props.toDoItem.id)}>
      <p className={props.toDoItem.completed ? 'strike-through' : 'no-strike-through' }>{props.toDoItem.task}</p>
    </div>
  )
}

export default Todo;