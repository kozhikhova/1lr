import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: []
  }
  //Переключение состояния завершения задачи
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  //Удаление Todo
  delete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  //Добавление Todo
  addTodo = (title) => {

    //переменная, которая создает новый объект Todo, вызываемый в методе this.setState ниже
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
    };
    
    //'...' - метод распространения, который копирует this.state.todos как новый объект, затем newTodo меняет ключи внутри объекта
    if(newTodo.title)
    this.setState({ todos: [...this.state.todos, newTodo] });
    else
    alert( "Пустая строка" ); //проверка ввода текста в поле заголовка
  }

  render() {
    return (
      //from BrowserRouter, allows the creation of multiple pages. Create new pages with "<Route path >"
    <Router>
      <div className="App">
        <div className="container container-fluid">
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete}delete={this.delete} />
            </React.Fragment>
          )} />
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
