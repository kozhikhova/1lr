import React, { Component } from 'react'

export class TodoItem extends Component {
  getStyle = () => {
      return {
          background: 'white', borderBottom: '1px #ccc solid', borderRadius: '20px', paddingLeft: '20px', paddingRight: '20px', marginRight: "10px", 
          textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }
  }
   
  render() {
      const {id, title} = this.props.todo;
    return (
      <div id="beyond" style={this.getStyle()}>
        <p style={{paddingTop: '15px', fontSize: '18px'}}>
          <label onChange={this.props.markComplete.bind(this, id)} class="checkbox path">
            <input type="checkbox"/>
            <svg viewBox="0 0 21 21">
                <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
            </svg>
          </label>
          {title}
          <button style={{background: 'white', fontSize: '18px'}} type="button" className="btnDel" onClick={this.props.delete.bind(this, id)}><i class="far fa-trash-alt"></i></button>
        </p> 
      </div>    
    )
  }
}

export default TodoItem;
