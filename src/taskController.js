import displayController from "./displayController.js";
import taskFactory from "./taskFactory.js";

const eventListenersModule = (() => {

    let selectedProjectTasks;

    const _addTaskButton     = document.getElementById("addNewTask");
    const _submitButton      = document.getElementById("submitButton");
    const _cancelButton      = document.getElementById("cancelButton");
    const _form              = document.getElementById("form");

    const _submitNewTaskForm = () => {
        const newTaskTitle       = _form.elements["title"].value;
        const newTaskDescription = _form.elements["description"].value;
        const newTaskDueDate     = _form.elements["dueDate"].value;
        const newTaskPriority    = _form.elements["priority"].value;

        const newTask = taskFactory(newTaskTitle, selectedProjectTasks.length);
        newTask.setDescription(newTaskDescription);
        newTask.setDueDate(newTaskDueDate);
        newTask.setPriority(newTaskPriority);
        selectedProjectTasks.addTask(newTask);

        displayController.renderTasks(selectedProjectTasks);
        displayController.closeNewTaskForm(event);
    };

    const renderTasks = (event) => {
        selectedProjectTasks = event.target.projectList[event.target.dataset.id];
        displayController.highlightProject(event.target);
        displayController.renderTasks(event.target.projectList[event.target.dataset.id]);
    };

    const applyEventListeners = () => {
        _addTaskButton.addEventListener("click", displayController.displayNewTaskForm);
        _form         .addEventListener("click", displayController.closeNewTaskForm);
        _cancelButton .addEventListener("click", displayController.closeNewTaskForm);
        _submitButton .addEventListener("click", _submitNewTaskForm);
    };

    return {
        applyEventListeners,
        renderTasks
    };
})();

export default eventListenersModule;