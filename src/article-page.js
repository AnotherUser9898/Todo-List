import { catalogue } from "./index";
import { getSelectedProject } from "./project-node";
import { RenderMain } from "./render-main";
import { RenderProject } from "./render-project";
function saveButtonEvent(){
    const form = document.querySelector(".edit-task-form")
    const saveButton = document.querySelector(".save-changes");
    const dialog = document.querySelector(".edit-task-dialog");
    saveButton.addEventListener("click",(event) => {
        event.preventDefault();
        console.log(saveButton.id);

        const title = form.elements['title'].value;
        const description = form.elements['description'].value;
        const priority = form.elements['priority'].value;
        const dueDate = form.elements['due-date'].value;

        if ((title == null || title == "") || (description == null || description == "") || (priority == null || priority == "Please choose a priority") || (dueDate == null || dueDate == "")) {
            alert("All fields not filled");
            return;
        }
        
        const project = catalogue.getProject(getSelectedProject());
        const todoIndex = project.getTodoIndex(saveButton.id);
        project.list[todoIndex].title = form.elements["title"].value;
        project.list[todoIndex].description = form.elements["description"].value;
        project.list[todoIndex].priority = form.elements["priority"].value;
        project.list[todoIndex].dueDate = form.elements["due-date"].value;

        dialog.close();
        const projectContainer = RenderProject(project);
        RenderMain(projectContainer);
        localStorage.setItem(`${project.title}`,JSON.stringify(project));
    })
}

function removeButtonEvent() {
    const removeButton = document.querySelector(".remove-todo");
    removeButton.addEventListener("click",() => {
        project = catalogue.getProject(getSelectedProject());
        const todoIndex = project.getTodoIndex(removeButton.id);
        project.removeTodo(todoIndex);
        localStorage.setItem(`${project.title}`,JSON.stringify(project));
        RenderMain(RenderProject(project));
    })
}

export {saveButtonEvent,removeButtonEvent};