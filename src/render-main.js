function RenderMain(projectContainer) {
    const mainPage = document.querySelector("article");
    mainPage.replaceChild(projectContainer,mainPage.firstElementChild);
}
export {RenderMain};