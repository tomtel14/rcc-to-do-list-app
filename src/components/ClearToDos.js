import React, { Component } from 'react';

class ClearToDos extends Component {
  render() {
    return (
      this.props.todos.length > 0 && <button className="clear btn" onClick={() => this.props.clearToDos()}> Clear All</button >
    )
  }
}

export default ClearToDos;