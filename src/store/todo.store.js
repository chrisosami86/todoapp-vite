import { Todo } from '../todos/models/todo.model'; 

const Filter = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra filosofal'),
        new Todo('Piedra Lunar'),
        new Todo('Piedra estelar'),
        new Todo('Piedra Trueno'),
        new Todo('Piedra Oscura')
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
    state.todos = state.todos.map( ( todo ) => {
        if (todo.id === todoId){
            todo.done = !todo.done;
        }
        return todo;
    });
};

const addTodo = ( description ) => {
    if ( !description ) throw new Error('Description is required');

    state.todos.push(new Todo (description));
};

const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( (todo) =>  todo.id === !todoId  );
};

const deleteCompleted = () => {
    state.todos = state.todos.filter( (todo) =>  todo.done  );
};

const getTodos = (filter = Filter.All) => {
    switch ( filter ){
        case Filter.All:
            return [...state.todos];
        
        case Filter.Completed:
            return state.todos.filter( ( todo ) => todo.done );
        
        case Filter.Pending:
            return state.todos.filter( ( todo ) => !todo.done );;
        
        default:
            throw new Error(`Option ${ filter } is not valid`);
    }
};

const setFilter = (newFilter = Filter.All) => {
    state.filter = newFilter;
};

const getCurrentFilter = () => {
    return state.filter;
};

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}