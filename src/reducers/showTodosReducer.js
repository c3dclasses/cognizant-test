// action type
export const SHOW_ALL_TODOS = "SHOW_ALL_TODOS";
export const SHOW_ACTIVE_TODOS = "SHOW_ACTIVE_TODOS";
export const SHOW_COMPLETED_TODOS = "SHOW_COMPLETED_TODOS";
export const DEL_CHECKED_TODOS = "SHOW_CHECKED_TODOS";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibilityFilters = {
    SHOW_ALL_TODOS:"SHOW_ALL_TODOS",
    SHOW_ACTIVE_TODOS:"SHOW_ACTIVE_TODOS",
    SHOW_COMPLETED_TODOS:"SHOW_COMPLETED_TODOS"
}

// initial state
const showInitTodosState = SHOW_ALL_TODOS; 

// reducer
export function showTodosReducer(state=showInitTodosState, action) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

// actions 
export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: filter
    }
}


export function getVisibleTodos(todos, filter) {
    switch(filter) {
        case SHOW_ACTIVE_TODOS:
            return todos.filter(t=>!t.completed);
        case SHOW_COMPLETED_TODOS:
            return todos.filter(t=>t.completed);
        case SHOW_ALL_TODOS:
            return todos;
        default:
            throw new Error("Unknown filter: " + filter);
    }
}

/*
export function showAllTodos() {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: SHOW_ALL_TODOS
    }
}

export function showActiveTodos() {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: SHOW_ACTIVE_TODOS
    }
}

export function showCompletedTodos() {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: SHOW_COMPLETED_TODOS
    }
}

export function delCheckedTodos() {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: DEL_CHECKED_TODOS
    }
}
*/
