import React, { Component } from 'react';

class AddToDo extends Component {

  state = {
    title: ''
  }

  onChangeFunc = (e) => {
    this.setState({ title: e.target.value })
  }

  onSubmitFunc = (e) => {
    e.preventDefault();
    if (this.state.title.length === 0) {
      alert('Input required')
    } else {
      this.props.addToDo(this.state.title);
      this.setState({ title: '' })
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmitFunc}>
        <input
          className="placeholder-input"
          type="text"
          name="title"
          placeholder="Add Item..."
          value={this.state.title}
          onChange={this.onChangeFunc}
          autoFocus
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
        />
      </form>
    )
  }
}

export default AddToDo;
