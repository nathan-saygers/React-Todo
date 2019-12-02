import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newToDo: '',
    }
  }

  render() {
    console.log('rendering from');
    return(
      <form action="">
        <label htmlFor="" />
        <input type="text"/>
        <button>Add</button>
      </form>
    )
  }
}

export default TodoForm;