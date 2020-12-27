import React, { Component } from 'react'
import { MDBInputGroup } from 'mdbreact'
import Button from 'react-mdl/lib/Button'
export class AddTodo extends Component {

  //Значение поля ввода текста, которое обновляется по мере ввода пользователем нового значения
  state = {
      title: ''
  }

  //Обновление состояния "title" поля ввода текста 
  onChange = (e) => this.setState({ title: e.target.value });

  //Отправка значения заголовка поля ввода для создания нового Todo
  onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({title: ''});
  };

  render() {
    return (
     <form style={{display: 'flex', marginBottom:'30px'}} onSubmit={this.onSubmit}>     
         
        <MDBInputGroup material type="text" name="title" className="input-group" value={this.state.title} onChange={this.onChange} 
      hint="Добавить задачу" containerClassName="mb-1 mt-10"/>
                 
        <Button class="AQUA mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"><i class="fas fa-plus"></i></Button>
     </form>
    )
  }
}

export default AddTodo;
