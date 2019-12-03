import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

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
      newToDo: '',
    }
  };

  addToDo = toDoText => {
    const newToDo = {
      task: toDoText,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      toDos: [...this.state.toDos, newToDo]
    })
  }

  removeCompleted = () => {
    const filteredToDo = this.state.toDos.filter(toDo => !toDo.completed);
    this.setState({toDos: filteredToDo})
  }

  toggleComplete = id => {
    let toDosCopy = this.state.toDos.map( toDo => {
      if(toDo.id === id) {
        toDo.completed = !toDo.completed;
        return toDo;
      }
      return toDo;
    })
    this.setState({toDos: toDosCopy})
  }

  handleChanges = event => {
    this.setState({newToDo: event.target.value})
    console.log(this.state.newToDo);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.addToDo(this.state.newToDo);
  }

  render() {
    console.log('rendering...')
    console.log(this.state.toDos);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoForm 
            addToDo={this.addToDo} 
            handleChanges={this.handleChanges} 
            handleSubmit={this.handleSubmit} 
            newToDo={this.newToDo}
          />
        </div>
        <div>
          <TodoList 
            toDos={this.state.toDos} 
            toggleComplete={this.toggleComplete} 
          />
          <button onClick={this.removeCompleted}>
            Clear Completed
          </button>
        </div>
      </div>
    );
  }
}

export default App;
