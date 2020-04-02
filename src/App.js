import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import {TodoListEx} from './components/TodoList';
import {FooterEx} from './components/Footer';
import rootReducer from './reducers/rootReducer';
import { AddTodoEx } from './components/AddTodo';
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(rootReducer);

function handleClick(e) {
  alert("clicked todo text");
}

function App() {
  return (
    <Provider store = {store}>

    <div className="App">
     <AddTodoEx/>
     <TodoListEx />
     <FooterEx />
     
     {/*
     <Todo onClick={handleClick} completed={true} text="todo-text" />
    <TodoList  
      todos={
        [{id:0, onClick: handleClick, completed:true, text:"0"},
        {id:1, onClick: handleClick, completed:false, text:"1"},
        {id:2, onClick: handleClick, completed:false, text:"2"}]
      }
      toggleTodo={handleClick}
      />
     <Footer />
    */}
     </div>
    </Provider>
    
  );
}
export default App;
