import { Todo } from '../todos/models/todo.model'; 

const Filter = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todo: [
        new Todo('Piedra filosofal'),
        new Todo('Piedra Lunar'),
        new Todo('Piedra estelar')
    ],
    filter: Filter.All,
}

const initStore = () => {
    console.log(state);
    console.log('initStore 🥑');
};


const loadStore = () => {
    throw new Error('Not implemented');
};

const toggleTodo = ( todoId ) => {
    throw new Error('Not implemented');
};

const addTodo = ( description ) => {
    throw new Error('Not implemented');
};

const deleteTodo = ( todoId ) => {
    throw new Error('Not implemented');
};

const deleteCompleted = () => {
    throw new Error('Not implemented');
};

const setFilter = (newFilter = Filter.All) => {
    throw new Error('Not implemented');
};

const getCurrentFilter = () => {
    throw new Error('Not implemented');
};

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}