import React from 'react';
import Todo from '../TodoComponents/Todo'

const TodoList = props => {

  return (
    <div className='Todo-List'>
      {props.toDos.map( toDoItem => (
        <Todo key={toDoItem.id} toDoItem={toDoItem}/>
      ))}
      <button>
        Clear Completed
      </button>
    </div>
  )
}

export default TodoList;