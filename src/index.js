import taskController from "./taskController.js";
import projectController from "./projectController.js";
import testObjects from "./testObjects.js";

projectController.renderProjects(testObjects.exampleProjects);
document.getElementsByClassName("project")[0].click();

taskController.applyEventListeners();
projectController.applyEventListeners();