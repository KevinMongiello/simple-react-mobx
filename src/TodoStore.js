import { makeAutoObservable, autorun } from "mobx";
import { v4 as uuid } from 'uuid';

class TodoStore {
    todos = [];
    filter = "filter";
    
    constructor() {
        makeAutoObservable(this);
    }

    createTodo(value) {
        this.todos.push(new Todo(value));
    }
    
    completeTodo (id) {
        this.todos.find(todo => todo.id === id).complete();
    }
}

class Todo {
    id = uuid();
    value = "";
    done = false;

    constructor(value) {
        this.value = value;
        makeAutoObservable(this);
    }

    complete() {
        this.done = !this.done;
    }
}

const store = window.store = new TodoStore();

export default store;

autorun(() => {
    console.log('abc')
    console.log(store.filter)
    console.log(store.todos)
})