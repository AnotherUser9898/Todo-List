class Todo {
    title;
    description;
    dueDate;
    priority;
    notes;
    completed;

    constructor (title,description,dueDate,priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    set priority(value) {
        this.priority = value;
    }

    get priority() { 
        return this.priority;
    }

    get title() {
        return this.title;
    }

    set title(value) {
        this.title = value;
    }

    get dueDate() {
        return this.dueDate;
    }

    set dueDate(value) {
        this.dueDate = value;
    }

    get description() {
        return this.description;
    }

    set description(value) {
        this.description = value;
    }

    get completed() {
        return this.completed;
    }

    set completed(value) {
        this.completed = value;
    }

    set completed(value) {
        this.completed = value;
    }
}

export {Todo};