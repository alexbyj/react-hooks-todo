import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import Typography from '@material-ui/core/Typography';

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>      
      <TodoForm saveTodo={todoText => {
        console.log('#### todoText = ', todoText)
        const trimmedText = todoText.trim()
        if (trimmedText) {
          addTodo(trimmedText)
        }
      }}>
      </TodoForm>
      <TodoList todos={todos} deleteTodo={deleteTodo}></TodoList>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
