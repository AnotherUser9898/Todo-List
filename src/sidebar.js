import { addNewTask,showTaskDialog,addNewProject,showProjectDialog } from "./sidebar-events";
function setupSidebar() {
    addNewTask();
    showTaskDialog();
    addNewProject();
    showProjectDialog();
}
export {setupSidebar};