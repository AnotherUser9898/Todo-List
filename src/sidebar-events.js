import { catalogue } from "./index";
import { RenderProject } from "./render-project";
import { Project } from "./project";
import { Todo } from "./todo";
import {RenderMain} from "./render-main";
import {AddProjectNode,getSelectedProject} from "./project-node";
import "./sidebar.css";

function showTaskDialog() {
    const dialog = document.querySelector(".add-task-dialog");
    const addTaskButton = document.querySelector(".add-task");
    addTaskButton.addEventListener("click",() => {
        dialog.showModal();
    })
}


function addNewTask() {
    const dialog = document.querySelector(".add-task-dialog");
    const form = document.querySelector(".task-form");
    const submitButton = document.querySelector(".submit");

    submitButton.addEventListener("click",(event) => {
        event.preventDefault();
        const title = form.elements['title'].value;
        const description = form.elements['description'].value;
        const priority = form.elements['priority'].value;
        const dueDate = form.elements['due-date'].value;
        if ((title == null || title == "") || (description == null || description == "") || (priority == null || priority == "Please choose a priority") || (dueDate == null || dueDate == "")) {
            alert("All fields not filled");
            return;
        }
        const project = catalogue.getProject(getSelectedProject());
        console.log(getSelectedProject());
        console.log(project.title);
        const todo = new Todo(title,description,dueDate,priority);
        project.addTodo(todo);
        catalogue.addProject(project);
        RenderMain(RenderProject(project));
        localStorage.setItem(`${project.title}`,JSON.stringify(project));
        dialog.close();
    })
}

function addNewProject() {
    const dialog = document.querySelector(".add-project-dialog");
    const form = document.querySelector(".project-form");
    const submitButton = document.querySelector(".submit-project");
    submitButton.addEventListener("click",(event) => {
        event.preventDefault();
        const title = form.elements['title'].value;
        if (title == null || title == "") {
            alert("All fields not filled");
            return;
        }
        const project = new Project(title);
        catalogue.addProject(project);
        AddProjectNode(title);
        localStorage.setItem(`${project.title}`,JSON.stringify(project));
        dialog.close();
    })
}

function showProjectDialog() {
    const dialog = document.querySelector(".add-project-dialog");
    const addProjectButton = document.querySelector(".add-project");
    addProjectButton.addEventListener("click",() => {
        dialog.showModal();
    })
}

export {addNewTask,showTaskDialog,addNewProject,showProjectDialog};