import { RenderProject } from "./render-project";
import { catalogue } from "./index";
let selectedProject = "My Project";

function AddProjectNode(title) {
    const mainPage = document.querySelector("article");
    const projectContainer = document.querySelector("section.projects");
    const project = document.createElement("div");
    project.classList.add("project");
    project.textContent = title;
    projectContainer.appendChild(project);
    project.addEventListener("click",() => {
        selectedProject = project.textContent;
        const obj = catalogue.getProject(selectedProject);
        mainPage.replaceChild(RenderProject(obj),mainPage.firstElementChild);
    })
}

function getSelectedProject() {
    return selectedProject;
}


export {AddProjectNode,getSelectedProject};