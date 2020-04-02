import React from 'react'
import PropTypes from 'prop-types';
import Todo from './Todo';
import {togTodoAction, togCheckAction} from '../reducers/todosReducer';
import {getVisibleTodos} from '../reducers/showTodosReducer';
import {connect} from 'react-redux';

function TodoList({todos, toggleTodo, toggleCheck}) {
    return (
        <ul>
            {
                todos.map(
                    todo=><Todo key={todo.id} {...todo} onChange={()=>toggleCheck(todo.id)} onClick={()=>toggleTodo(todo.id)}/>
                )
            }
        </ul>
    )
}


TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape(Todo.protoType).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList;



function mapStateToProps(state) {
    console.log(state);
    return {
        todos: getVisibleTodos(state.todos, state.filter)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTodo: id=>dispatch(togTodoAction(id)),
        toggleCheck: id=>dispatch(togCheckAction(id))
    }
}

export const TodoListEx = connect(
    mapStateToProps, 
    mapDispatchToProps
)(TodoList);
