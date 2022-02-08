import { makeAutoObservable, autorun } from "mobx";

class AppStore {
    todos = [];
    filter = "filter";
    constructor() {
        makeAutoObservable(this);
    }
}

const store = window.store = new AppStore();

export default store;

autorun(() => {
    console.log('abc')
    console.log(store.filter)
    console.log(store.todos)
})