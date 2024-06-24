import { catalogue } from "./index";
import { RenderMain } from "./render-main";
import { RenderProject } from "./render-project";
import { getSelectedProject } from "./project-node";
import './todo.css';
function RenderTodo(todo) {
    const dialog = document.querySelector(".edit-task-dialog");
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");
    if (todo.priority == "high") {
        todoContainer.style.cssText += "background-color: #fca5a5;";
    }
    else if (todo.priority == "medium") {
        todoContainer.style.cssText += "background-color: #d1d5db;";
    } else {
        todoContainer.style.cssText += "background-color: #bef264;";
    }

    const checkedButton = document.createElement("input");
    checkedButton.setAttribute("type","checkbox");
    checkedButton.classList.add("checked-button");
    checkedButton.id = todo.title;
    const project = catalogue.getProject(getSelectedProject());
    const todoIndex = project.getTodoIndex(checkedButton.id);

    const todoTitle = document.createElement("div");
    todoTitle.classList.add("todo-title");
    todoTitle.textContent = todo.title;

    const todoDate = document.createElement("div");
    todoDate.classList.add("todo-date");
    todoDate.textContent = todo.dueDate;

    const expandTodoButton = document.createElement("button");
    expandTodoButton.classList.add("expand-todo","todo-button");
    expandTodoButton.textContent = "Edit";

    const removeTodoButton = document.createElement("button");
    removeTodoButton.classList.add("remove-todo","todo-button");
    removeTodoButton.textContent = "Remove";
    removeTodoButton.id = todo.title;

    expandTodoButton.addEventListener("click",() => {
        const form = document.querySelector(".edit-task-form");
        form.elements["title"].value = todo.title;
        form.elements["description"].value = todo.description;
        form.elements["due-date"].value = todo.dueDate;
        form.elements["priority"].value = todo.priority;
        const saveButton = document.querySelector(".save-changes");
        saveButton.id = todo.title;
        removeTodoButton.id = todo.title;
        dialog.show();
    })

    removeTodoButton.addEventListener("click",() => {
        const project = catalogue.getProject(getSelectedProject());
        const todoIndex = project.getTodoIndex(removeTodoButton.id);
        project.removeTodo(todoIndex);
        localStorage.setItem(`${project.title}`,JSON.stringify(project));
        RenderMain(RenderProject(project));
    })

    checkedButton.addEventListener("change", () => {
        if (checkedButton.checked) {
            project.strikeTodo(todoIndex);
            todoContainer.style.cssText += "color: gray";
            todoTitle.style.cssText += "text-decoration: line-through";
        } else {
            project.unstrikeTodo(todoIndex);
            todoContainer.style.cssText += "color: black";
            todoTitle.style.cssText += "text-decoration: none";
        }
        localStorage.setItem(`${project.title}`,JSON.stringify(project));
    })

    if (project.list[todoIndex].completed == true) {
        todoContainer.style.cssText += "color: gray";
        todoTitle.style.cssText += "text-decoration: line-through";
        checkedButton.checked = true;
    } else {
        todoContainer.style.cssText += "color: black";
        todoTitle.style.cssText += "text-decoration: none";
    }

    todoContainer.append(checkedButton,todoTitle,todoDate,expandTodoButton,removeTodoButton);

    return todoContainer;
}

export {RenderTodo};