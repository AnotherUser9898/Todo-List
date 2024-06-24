import { catalogue } from "./index";
import { Project } from "./project";
import { Todo } from "./todo";
import { RenderMain } from "./render-main";
import { RenderProject } from "./render-project";
import { AddProjectNode } from "./project-node";
function setupLocal() {
    const projects = Object.keys(localStorage);
    for (let i = 0; i < projects.length; i++) {
        let project = JSON.parse(localStorage.getItem(projects[i]));
        let projectObject;
        if (project.title == "My Project") {
            projectObject = catalogue.getProject("My Project");
        } else {
            projectObject = new Project(project.title);
        }
        for (let j = 0; j < project.list.length; j++) {
            const todo = project.list[j];
            const todoObject = new Todo(todo.title, todo.description, todo.dueDate, todo.priority);
            const completedStatus = todo.completed == true ? true : false;
            todoObject.completed = completedStatus;
            projectObject.addTodo(todoObject);
        }
        catalogue.addProject(projectObject);
    }
}

function setupLocalDOM() {
    RenderMain(RenderProject(catalogue.getProject("My Project")));
    catalogue.projects.forEach((project) => {
        if (project.title != "My Project") {
            AddProjectNode(project.title);
        }
    })
}

export { setupLocal,setupLocalDOM };