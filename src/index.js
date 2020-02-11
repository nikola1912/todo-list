import taskController from "./taskController.js";
import projectController from "./projectController.js";

import displayController from "./displayController.js";
import testObjects from "./testObjects.js";

projectController.renderProjects(testObjects.exampleProjects);

taskController.applyEventListeners();
projectController.applyEventListeners();