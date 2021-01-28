import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AddToDo from './components/AddToDo';
import ToDos from './components/ToDos';
import ClearToDos from './components/ClearToDos';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'built using class components',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'passing methods as props',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'binding event handlers',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'destructuring',
        completed: false
      },
    ]
  }

  addToDo = (title) => {

    const newToDo = {
      id: uuidv4(),
      title: title,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newToDo]
    })

  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  delToDo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  clearToDos = () => {
    this.setState({
      todos: []
    })
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <Header />
          <AddToDo addToDo={this.addToDo} />
          <ToDos todos={this.state.todos} toggleComplete={this.toggleComplete} delToDo={this.delToDo} />
          <ClearToDos todos={this.state.todos} clearToDos={this.clearToDos} />
        </div>
      </div>
    )
  }
}

export default App;

