import './style.css';
import { Catalogue } from './project-catalogue';
import { RenderProject } from './render-project';
import { setupSidebar } from './sidebar';
import { AddProjectNode } from './project-node';
import { RenderMain } from './render-main';
import { saveButtonEvent } from './article-page';
import {setupLocal,setupLocalDOM} from './setup-local-data';
const mainPage = document.querySelector("article");
const catalogue = new Catalogue();
mainPage.appendChild(RenderProject(catalogue.getProject("My Project")));
localStorage.removeItem("catalogue");
AddProjectNode("My Project");
setupLocal();
setupLocalDOM();
setupSidebar();
saveButtonEvent();
export {catalogue};