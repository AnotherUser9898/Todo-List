import {Todo} from './todo.js';
class Project {
    title;
    list;
    constructor(title) {
        this.title = title;
        this.list = Array();
    }

    get title() {
        return this.title;
    }

    get list() {
        return this.list;
    }

    addTodo(listItem) {
        if (this.getTodoIndex(listItem.title) == -1) {
            this.list.push(listItem);
        } else {
            console.log("This todo already exists");
        }
    }

    strikeTodo(index) {
        this.getTodo(index).completed = true;
    }

    unstrikeTodo(index) {
        this.getTodo(index).completed = false;
    }

    getTodoIndex(name) {
        const index = this.list.findIndex((todo) => {
            return todo.title == name;
        });
        return index;
    }

    getTodo(index) {
        return this.list[index];
    }

    removeTodo(index) {
        this.list.splice(index,1);
    }

}

export {Project};