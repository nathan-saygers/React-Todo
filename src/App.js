import React from 'react';

const toDos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change
  // handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDos: toDos,
    }
  };

  addToDo = toDoText => {
    const newToDo = {
      task: '',
      id: Date.now(),
      completed: false,
    }
    this.setState({
      toDos: [...this.state.toDos, newToDo]
    })
  }

  render() {
    console.log('rendering...')
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoForm addToDo={this.addToDo}/>
        </div>
        <div>
          <TodoList toDos={this.state.toDos}/>
        </div>
      </div>
    );
  }
}

export default App;
