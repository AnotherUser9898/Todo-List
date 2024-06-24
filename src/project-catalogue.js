import {Project} from './project.js';
class Catalogue {
    projects;
    defaultProject;
    constructor() {
        this.projects = Array();
        this.defaultProject = new Project("My Project");
        this.addProject(this.defaultProject);
    }

    addProject(project) {
        if (this.getProjectIndex(project.title) == -1)
        this.projects.push(project);
    }

    removeProject(project) {
        index = this.getProjectIndex(project.title);
        this.projects.splice(index,1);
    }
    
    getProjectIndex(name) {
        const index = this.projects.findIndex(project => project.title === name);
        return index
    }

    getProject(name) {
        return this.projects[this.getProjectIndex(name)];
    }

    get projects() {
        return this.projects;
    }
}

export {Catalogue};