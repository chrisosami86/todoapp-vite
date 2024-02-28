import { renderTodos } from './uses-cases';
import html from './app.html?raw';  //Permite importar html en crudo, esto es propio de vite
import todoStore from '../store/todo.store';


const elementsIDs = {
    TodoList: '.todo-list',
}

/**
 * 
 * @param {String} documenId  Identificar el elemento donde vamos a renderizar
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos (elementsIDs.TodoList ,todos);
    };

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();
};