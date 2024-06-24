import { RenderTodo } from "./render-todo";
import './project.css';
function RenderProject(project) {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");
    projectContainer.id = project.title;

    const title = document.createElement("div");
    title.classList.add("project-title");
    title.textContent = project.title;
    projectContainer.appendChild(title);

    project.list.forEach(todo => {
        projectContainer.appendChild(RenderTodo(todo));
    });

    return projectContainer;
}

export {RenderProject};