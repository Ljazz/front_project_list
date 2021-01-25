import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import ListItems from './ListItems';
import Header from './Header';
import './app.css';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todoItem: "",
            items: ["学习Python", "Django框架", "Reactjs", "Angular框架"]
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    //输入框事件
    onChange(event){
        this.setState({
            todoItem: event.target.value
        });
    }
    // 表单提交按钮单击事件
    onSubmit(event){
        event.preventDefault();
        this.setState({
            todoItem: "",
            items:[
                ...this.state.items,
                this.state.todoItem
            ]
        });
    }
    render(){
        return(
            <div className="container">
                <Header title="TodoList" />
                <form className="form-wrap" onSubmit={this.onSubmit}>
                    <input value={this.state.todoItem} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
                <ListItems items={this.state.items} />
            </div>
        );
    }
}

App.propTypes = {
    items: PropTypes.array,
    todoItem: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
};
