import React from "react";
import {connect} from "react-redux";
import {addTodoAction} from "../reducers/todosReducer";

export function AddTodo({dispatch}) {
    let input;
    return (
        <div>
            <form onSubmit={e=>{
                e.preventDefault()
                if(!input.value.trim()) {
                    return;
                }
                dispatch(addTodoAction(input.value));
                input.value = '';
            }}>
                <input ref={node=>input = node} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export const AddTodoEx = connect()(AddTodo);