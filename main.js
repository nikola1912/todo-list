/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst displayControllerModule = (() => {\r\n    \r\n    const _newTaskForm      = document.getElementById(\"form\");\r\n    const _submitTaskButton = document.getElementById(\"submitButton\");\r\n    const _cancelTaskButton = document.getElementById(\"cancelButton\");\r\n\r\n    const _projectList      = document.getElementById(\"projectList\");\r\n    const _newProjectForm   = document.getElementById(\"projectForm\");\r\n    const _submitFormButton = document.getElementById(\"projectFormSubmitButton\");\r\n    const _cancelFormButton = document.getElementById(\"projectFormCancelButton\");\r\n    \r\n    const expandProjects = () => {\r\n        const projectList = document.getElementById(\"projectList\");\r\n        projectList.classList.toggle(\"showProjects\");\r\n        projectList.classList.toggle(\"hideProjects\");\r\n    };\r\n    \r\n    const displayNewProjectForm = () => {\r\n        _newProjectForm.style.display = \"block\";\r\n    };\r\n\r\n    const closeNewProjectForm = (event) => {\r\n        if (event.target == _newProjectForm || event.target == _cancelFormButton || event.target == _submitFormButton) {\r\n            _newProjectForm.reset();\r\n            _newProjectForm.style.display = \"none\";\r\n        }\r\n    };\r\n\r\n    const renderProjects = (projects) => {\r\n        _projectList.innerHTML = \"\";\r\n        \r\n        projects.forEach(project => {\r\n            const projectParent = document.createElement(\"div\");\r\n            projectParent.classList.add(\"project\");\r\n            projectParent.dataset.id = project.getID();\r\n\r\n            const projectColor = document.createElement(\"div\");\r\n            projectColor.classList.add(\"projectColor\", \"red\");\r\n            projectParent.append(projectColor, `${project.getTitle()}`);\r\n\r\n            _projectList.append(projectParent);\r\n        });\r\n    };\r\n\r\n    const highlightProject = (project) => {\r\n        for (let project of _projectList.childNodes) {\r\n            project.classList.remove(\"selected\");\r\n        }\r\n        project.classList.add(\"selected\");\r\n    };\r\n\r\n    const expandTask = (event) => {\r\n        const taskDescriptionNode = event.target.closest(\".task\").getElementsByClassName(\"description\")[0];\r\n        taskDescriptionNode.classList.toggle(\"ON\");\r\n        taskDescriptionNode.classList.toggle(\"OFF\");\r\n    };\r\n\r\n    const displayNewTaskForm = () => {\r\n        _newTaskForm.style.display = \"block\";\r\n    };\r\n\r\n    const closeNewTaskForm = (event) => {\r\n        if (event.target == _newTaskForm || event.target == _cancelTaskButton || event.target == _submitTaskButton) {\r\n            _newTaskForm.reset();\r\n            _newTaskForm.style.display = \"none\";\r\n        }\r\n    };\r\n\r\n    const renderTasks = (project) => {\r\n        const titleDiv = document.getElementById(\"title\");\r\n        const descriptionDiv = document.getElementById(\"description\");\r\n        titleDiv.innerHTML = `<h4>${project.getTitle()}</h4>`;\r\n        descriptionDiv.innerHTML = `${project.getDescription()}`;\r\n\r\n        const taskList = project.getTasks();\r\n        const tasksListDiv = document.getElementById(\"tasksList\");\r\n        const taskTemplate = document.getElementById(\"taskTemplate\");\r\n        \r\n        tasksListDiv.innerHTML = \"\";\r\n        \r\n        taskList.forEach((task) => {\r\n            const newTask = taskTemplate.cloneNode(true);\r\n            newTask.style.display = \"grid\";\r\n            console.log(taskList);\r\n            console.log(tasksList);\r\n            tasksListDiv.append(newTask);\r\n            newTask.getElementsByClassName(\"title\")[0].innerHTML = `<h4>${task.getTitle()}</h4>`;\r\n            newTask.getElementsByClassName(\"description\")[0].textContent = task.getDescription();\r\n            newTask.getElementsByClassName(\"dueDate\")[0].textContent = task.getDueDate();\r\n            newTask.getElementsByClassName(\"priority\")[0].textContent = task.getPriority();\r\n            newTask.getElementsByClassName(\"expandTaskCheckbox\")[0].addEventListener(\"click\", expandTask);\r\n            newTask.removeAttribute(\"id\");\r\n        });\r\n    };\r\n\r\n    return {\r\n        expandProjects,\r\n        displayNewProjectForm,\r\n        closeNewProjectForm,\r\n        renderProjects,\r\n        highlightProject,\r\n        expandTask,\r\n        displayNewTaskForm,\r\n        closeNewTaskForm,\r\n        renderTasks\r\n    };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayControllerModule);\n\n//# sourceURL=webpack:///./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _taskController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskController.js */ \"./src/taskController.js\");\n/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectController.js */ \"./src/projectController.js\");\n/* harmony import */ var _testObjects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testObjects.js */ \"./src/testObjects.js\");\n\r\n\r\n\r\n\r\n_projectController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderProjects(_testObjects_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].exampleProjects);\r\ndocument.getElementsByClassName(\"project\")[0].click();\r\n\r\n_taskController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].applyEventListeners();\r\n_projectController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].applyEventListeners();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/projectController.js":
/*!**********************************!*\
  !*** ./src/projectController.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFactory.js */ \"./src/projectFactory.js\");\n/* harmony import */ var _taskController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskController.js */ \"./src/taskController.js\");\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n/* harmony import */ var _testObjects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testObjects.js */ \"./src/testObjects.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst projectController = (() => {\r\n\r\n    let projects = [..._testObjects_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].exampleProjects];\r\n    let projectID = projects.length;\r\n\r\n    const _projectList      = document.getElementById(\"projectList\").childNodes;\r\n    const _expandButton     = document.getElementById(\"expandProjectCheckbox\");\r\n    const _addProjectButton = document.getElementById(\"projectAddWrapper\");\r\n    const _newProjectForm   = document.getElementById(\"projectForm\");\r\n    const _submitFormButton = document.getElementById(\"projectFormSubmitButton\");\r\n    const _cancelFormButton = document.getElementById(\"projectFormCancelButton\");\r\n\r\n    const _createNewProject = () => {\r\n        const newProjectTitle       = _newProjectForm.elements[\"title\"].value;\r\n        const newProjectDescription = _newProjectForm.elements[\"description\"].value;\r\n        const newProject = Object(_projectFactory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newProjectTitle, projectID);\r\n\r\n        projectID++;\r\n        newProject.setDescription(newProjectDescription);\r\n        projects.push(newProject);\r\n        renderProjects();\r\n        _displayController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].closeNewProjectForm(event);\r\n    };\r\n\r\n    const renderProjects = (givenProjects) => {\r\n        _displayController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderProjects(givenProjects || projects);\r\n        for (let project of _projectList) {\r\n            project.projectList = givenProjects || projects;  //This is because you can't pass arguments into event listener functions\r\n            project.addEventListener(\"click\", _taskController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderTasks);\r\n        }\r\n    };\r\n\r\n    const applyEventListeners = () => {\r\n        _expandButton    .addEventListener(\"click\", _displayController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].expandProjects);\r\n        _addProjectButton.addEventListener(\"click\", _displayController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayNewProjectForm);  \r\n        _newProjectForm  .addEventListener(\"click\", _displayController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].closeNewProjectForm);\r\n        _cancelFormButton.addEventListener(\"click\", _displayController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].closeNewProjectForm);\r\n        _submitFormButton.addEventListener(\"click\", _createNewProject);\r\n    }; \r\n\r\n    return {\r\n        applyEventListeners,\r\n        renderProjects\r\n    };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (projectController);\n\n//# sourceURL=webpack:///./src/projectController.js?");

/***/ }),

/***/ "./src/projectFactory.js":
/*!*******************************!*\
  !*** ./src/projectFactory.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst projectFactory = (title, id) => {\r\n    \r\n    let description = \"\";\r\n    let tasks = [];\r\n\r\n    const prototype = {\r\n        getTitle:       () => title,\r\n        getID:          () => id,\r\n        getDescription: () => description,\r\n        getTasks:       () => tasks,\r\n        setID:          (newId)          => id          = newId,\r\n        setDescription: (newDescription) => description = newDescription,\r\n        addTask:        (newTask)        => tasks.push(newTask)\r\n    };\r\n\r\n    return Object.create(prototype);\r\n}; \r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (projectFactory);\n\n//# sourceURL=webpack:///./src/projectFactory.js?");

/***/ }),

/***/ "./src/taskController.js":
/*!*******************************!*\
  !*** ./src/taskController.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n/* harmony import */ var _taskFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskFactory.js */ \"./src/taskFactory.js\");\n\r\n\r\n\r\nconst eventListenersModule = (() => {\r\n\r\n    let selectedProjectTasks;\r\n\r\n    const _addTaskButton     = document.getElementById(\"addNewTask\");\r\n    const _submitButton      = document.getElementById(\"submitButton\");\r\n    const _cancelButton      = document.getElementById(\"cancelButton\");\r\n    const _form              = document.getElementById(\"form\");\r\n\r\n    const _submitNewTaskForm = () => {\r\n        const newTaskTitle       = _form.elements[\"title\"].value;\r\n        const newTaskDescription = _form.elements[\"description\"].value;\r\n        const newTaskDueDate     = _form.elements[\"dueDate\"].value;\r\n        const newTaskPriority    = _form.elements[\"priority\"].value;\r\n\r\n        const newTask = Object(_taskFactory_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newTaskTitle, selectedProjectTasks.length);\r\n        newTask.setDescription(newTaskDescription);\r\n        newTask.setDueDate(newTaskDueDate);\r\n        newTask.setPriority(newTaskPriority);\r\n        selectedProjectTasks.addTask(newTask);\r\n\r\n        _displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderTasks(selectedProjectTasks);\r\n        _displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].closeNewTaskForm(event);\r\n    };\r\n\r\n    const renderTasks = (event) => {\r\n        selectedProjectTasks = event.target.projectList[event.target.dataset.id];\r\n        _displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].highlightProject(event.target);\r\n        _displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderTasks(event.target.projectList[event.target.dataset.id]);\r\n    };\r\n\r\n    const applyEventListeners = () => {\r\n        _addTaskButton.addEventListener(\"click\", _displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayNewTaskForm);\r\n        _form         .addEventListener(\"click\", _displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].closeNewTaskForm);\r\n        _cancelButton .addEventListener(\"click\", _displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].closeNewTaskForm);\r\n        _submitButton .addEventListener(\"click\", _submitNewTaskForm);\r\n    };\r\n\r\n    return {\r\n        applyEventListeners,\r\n        renderTasks\r\n    };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (eventListenersModule);\n\n//# sourceURL=webpack:///./src/taskController.js?");

/***/ }),

/***/ "./src/taskFactory.js":
/*!****************************!*\
  !*** ./src/taskFactory.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst taskFactory = (title, id) => {\r\n\r\n    let description = \"\";\r\n    let dueDate = \"\";\r\n    let priority = \"\";\r\n\r\n    const prototype = {\r\n        getTitle:       ()      => title,\r\n        getID:          ()      => id,\r\n        getDescription: ()      => description,\r\n        getDueDate:     ()      => dueDate,\r\n        getPriority:    ()      => priority,\r\n        setTitle:       (newTitle)       => title       = newTitle,\r\n        setID:          (newId)          => id          = newId,\r\n        setDescription: (newDescription) => description = newDescription,\r\n        setDueDate:     (newDueDate)     => dueDate     = newDueDate,\r\n        setPriority:    (newPriority)    => priority    = newPriority\r\n    };\r\n\r\n    return Object.create(prototype);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (taskFactory);\n\n//# sourceURL=webpack:///./src/taskFactory.js?");

/***/ }),

/***/ "./src/testObjects.js":
/*!****************************!*\
  !*** ./src/testObjects.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFactory.js */ \"./src/projectFactory.js\");\n/* harmony import */ var _taskFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskFactory */ \"./src/taskFactory.js\");\n\r\n\r\n\r\nconst testObjects = (() => {\r\n\r\n    let exampleProjects = [];\r\n    let projectID = 0;\r\n\r\n    const createExampleProject = (title, taskCount) => {\r\n        const newProject = Object(_projectFactory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, projectID);\r\n        projectID++;\r\n        for (let i = 0; i < taskCount; i++) {\r\n            const taskTitle = `Example task title ${i}`;\r\n            const newTask = Object(_taskFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskTitle, i);\r\n            const taskDescription = \"Students compile a collection of their texts in a variety of genres over time and choose two pieces to present for summative assessment. In the majority of cases, the work in the student’s collection will arise from normal classwork, as the examples below illustrate.\";\r\n            const taskDueDate = \"2020-02-11\";\r\n            const taskPriority = \"High\";\r\n\r\n            newTask.setDescription(taskDescription);\r\n            newTask.setDueDate(taskDueDate);\r\n            newTask.setPriority(taskPriority);  \r\n\r\n            newProject.addTask(newTask);\r\n        }\r\n        exampleProjects.push(newProject);\r\n        return newProject;\r\n    };\r\n\r\n    const project1 = createExampleProject(\"Primer jedan\", 6);\r\n    project1.setDescription(\"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas fugit obcaecati, ipsa, dolorum maxime exercitationem consequuntur libero possimus iure, nemo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas fugit obcaecati, ipsa, dolorum maxime exercitationem consequuntur libero possimus iure, nemo.\");\r\n    const project2 = createExampleProject(\"Example two\", 2);\r\n    const project3 = createExampleProject(\"Primer tri\", 1);\r\n    const project4 = createExampleProject(\"Example four\", 0);\r\n\r\n    return {\r\n        exampleProjects\r\n    };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (testObjects);\n\n//# sourceURL=webpack:///./src/testObjects.js?");

/***/ })

/******/ });