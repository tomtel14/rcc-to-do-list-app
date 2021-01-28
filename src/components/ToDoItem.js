import React, { Component } from 'react';

class ToDoItem extends Component {
  render() {

    /*
    return (
      <div className="todo">
        <p>
          <input type="checkbox" onChange={this.props.toggleComplete.bind(this, this.props.todo.id)} />
          <span className={this.props.todo.completed ? 'span-complete' : null}>{this.props.todo.title}</span
          <button onClick={this.props.delToDo.bind(this, this.props.todo.id)}>X</button>
        </p>
      </div>
    )
    */

    // A BETTER WAY OF DOING IT (PULLING VARIALBES OUT OF THE TODO IN THE PROPS):
    // Also notice how we are using callback functions to get around the binding issue

    const { id, title, completed } = this.props.todo;

    return (
      <div className="todo">
        <p>
          <input type="checkbox" onChange={() => this.props.toggleComplete(id)} />
          <span className={completed ? 'span-complete' : null}>{title}</span>
          <button onClick={() => this.props.delToDo(id)}>X</button>
        </p>
      </div>
    )

  }
}

export default ToDoItem;
