import React from 'react';

const TodoForm = props => {

    return(
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="toDo" />
        <input 
          type="text" 
          onChange={props.handleChanges} 
          value={props.newToDO}
        />
        <button>Add</button>
      </form>
  )
}

export default TodoForm;