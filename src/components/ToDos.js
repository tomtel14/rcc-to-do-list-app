import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <ToDoItem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} delToDo={this.props.delToDo} />
    ))
  }
}

export default ToDos;
