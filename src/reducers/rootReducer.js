import {showTodosReducer} from "./showTodosReducer";
import {todosReducer} from "./todosReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    filter: showTodosReducer,
    todos: todosReducer
});

export default rootReducer;