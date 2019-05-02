import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const { item } = this.props;
        return (
            // this.props.value.map( (item,index) =>{
            //     return <li key={index}>{index} . { item }<span onClick={this.props.handleDelete(index)}>X</span></li>
            // })

            // this.props.value.map( (item,index) =>{
            //     return <li key={index}>{index} . { item }<span onClick={ this.handleClick}>X</span></li>
            // })
            <li>
                <span>{item}</span>
                <span className="icon-close" onClick={this.handleClick}>X</span>
            </li>
        );
    }
    handleClick() {
        const { handleItemDelete,index } = this.props;
        handleItemDelete(index);
    }
}

export default TodoItem;
