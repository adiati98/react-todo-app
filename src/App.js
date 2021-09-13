import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import todosData from './components/todosData'

class App extends Component {
	constructor() {
		super()
		this.state = {
			todos: todosData,
		}
		this.handleChange = this.handleChange.bind(this)
	}

  handleChange(id) {
    const updateTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({
      todos: updateTodos
    })
  }

	render() {
		const todoItems = this.state.todos.map((item) => (
			<TodoItem key={item.id} item={item} handleChange={this.handleChange} />
		))

		return (
      <div className='todo-list'>
        <Header /> 
        {todoItems}
      </div>)
	}
}

export default App
