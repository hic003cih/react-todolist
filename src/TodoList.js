import React, { Component,Fragment } from 'react';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ['哈囉','hi'],
      input: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event){

    this.setState({
      input:event.target.value
    })
  }
  handleSubmit(event){
    
    this.setState({
      value:[...this.state.value,this.state.input]
    })
    alert(this.state.value);
    // this.state.value.push(this.state.input);

    event.preventDefault();
  }
  render() {
    return (
      <Fragment>
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.input} onChange={this.handleInputChange}></input>
        <button type="submit" >提交</button>
        </form>
        <ul>
          {/* <li>
            <span>吃饭</span>
            <span>X</span>
          </li>
          <li>2</li> */}
           {
            this.state.value.map( (item, index) =>{
              return <li key={index}>
              <span>{index}. {item}</span></li>
            })
          } 
        </ul>
      </div>
      </Fragment>
    );
  }
}

export default TodoList;
