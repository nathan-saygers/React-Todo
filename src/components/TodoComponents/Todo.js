import React from 'react'

const Todo = props => {

  return (
    <div className='completed'>
      <p>{props.toDoItem.task}</p>
    </div>
  )
}

export default Todo;