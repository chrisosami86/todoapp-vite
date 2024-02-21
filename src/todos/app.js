import { renderTodos } from './uses-cases';
import html from './app.html?raw';
import todoStore from '../store/todo.store';


const elementsIDs = {
    TodoList: '.todo-list',
}

/**
 * 
 * @param {String} documenId  Identificar el elemento donde vamos a renderizar
 */
export const app = (documenId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos (elementsIDs.TodoList ,todos);
    };

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(documenId).append(app);
        displayTodos();
    })();
};