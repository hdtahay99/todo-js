
import './style.css';
import {TodoList, Todo} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();


// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC1234');

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);

// todoList.todos.forEach(todo => crearTodoHtml (todo) );
todoList.todos.forEach( crearTodoHtml );

