import projectFactory from "./projectFactory.js";
import taskController from "./taskController.js";
import displayController from "./displayController";

import testObjects from "./testObjects.js";

const projectController = (() => {

    let projects = [...testObjects.exampleProjects];
    let projectID = projects.length;

    const _projectList      = document.getElementById("projectList").childNodes;
    const _expandButton     = document.getElementById("expandProjectCheckbox");
    const _addProjectButton = document.getElementById("projectAddWrapper");
    const _newProjectForm   = document.getElementById("projectForm");
    const _submitFormButton = document.getElementById("projectFormSubmitButton");
    const _cancelFormButton = document.getElementById("projectFormCancelButton");

    const _createNewProject = () => {
        const newProjectTitle       = _newProjectForm.elements["title"].value;
        const newProjectDescription = _newProjectForm.elements["description"].value;
        const newProject = projectFactory(newProjectTitle, projectID);

        projectID++;
        newProject.setDescription(newProjectDescription);
        projects.push(newProject);
        renderProjects();
        displayController.closeNewProjectForm(event);
    };

    const renderProjects = (givenProjects) => {
        displayController.renderProjects(givenProjects || projects);
        for (let project of _projectList) {
            project.projectList = givenProjects || projects;  //This is because you can't pass arguments into event listener functions
            project.addEventListener("click", taskController.renderTasks);
        }
    };

    const applyEventListeners = () => {
        _expandButton    .addEventListener("click", displayController.expandProjects);
        _addProjectButton.addEventListener("click", displayController.displayNewProjectForm);  
        _newProjectForm  .addEventListener("click", displayController.closeNewProjectForm);
        _cancelFormButton.addEventListener("click", displayController.closeNewProjectForm);
        _submitFormButton.addEventListener("click", _createNewProject);
    }; 

    return {
        applyEventListeners,
        renderProjects
    };
})();

export default projectController;