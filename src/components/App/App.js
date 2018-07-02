import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as taskActions from '../../actions/tasks'
import TodoItem from '../TodoItem/TodoItem'

class App extends Component {

  constructor(props){
    super(props);

    this.input = React.createRef();
  }


  addItem(event){
    if(event.key === "Enter"){
      this.props.actions.addTask({
        done: false,
        title: this.input.current.value,
        id: this.props.tasks.length + 1
      })
    }
  }

  markAs(task){
    this.props.actions.markAs(task);
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <div className="list">
          {
            this.props.tasks && this.props.tasks.map((task) => <TodoItem task={task} setDone={this.markAs.bind(this, task)}/>)
          }
          <div className="addItem">
            <input type="text" placeholder="New Task.." onKeyPress={this.addItem.bind(this)} ref={this.input}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return {
    tasks: state.tasks
  }
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(taskActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
