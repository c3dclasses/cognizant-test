// action types
const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";
const TOG_TODO = "TOG_TODO";
const TOG_CHECK = "TOG_CHECK";


// initial state
const todosState = [];

// reducer
export function todosReducer(state = todosState, action) {
    console.log(state);
    switch(action.type) {
        case ADD_TODO: 
            return [...state, {id:action.id, text:action.text, completed: false, checked: false}];
        case DEL_TODO:
            return state.filter(todo=>todo.checked!==true);
        case TOG_CHECK:
            return state.map(todo=>(action.id===todo.id) ? {...todo, checked: !todo.checked} : todo);
        case TOG_TODO:
            return state.map(todo=>(action.id===todo.id) ? {...todo, completed: !todo.completed} : todo);
        default:
            return state;
    }
}

// actions
let nextTodoId=0;
export function addTodoAction(text) {
    return {
        type: ADD_TODO,
        text:text,
        id:nextTodoId++
    };
}

export function togTodoAction(id) {
    return { 
        type: TOG_TODO,
        id:id 
    };
}

export function togCheckAction(id) {
    return { 
        type: TOG_CHECK,
        id:id 
    };
}


export function delTodoAction() {
    return { 
        type: DEL_TODO,
    };
}
