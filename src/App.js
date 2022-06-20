import brain from './brain.png';
import './App.css';
import TodoForm from './components/TodoForm';
import { useState } from 'react';
import TodoItem from './components/TodoItem';

function App() {

  const [todos, setTodos] = useState ([]);

  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false}
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  };

  const editTodo = (id, newName) => {
    let updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return {...todo, name: newName}
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={brain} className="App-logo" alt="logo" />
        <h1>
          Hello, Human.
        </h1>
        <p>
          Here are your tasks:
        </p>
        <TodoForm addTodo={addTodo}/>
      </header>
      <div className="App-body">
        {todos.map((todo)=> {
          return (
            <TodoItem 
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            todo={todo}
            key={todo.id}
            editTodo={editTodo}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
