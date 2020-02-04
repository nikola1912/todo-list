import displayController from "./displayController";

const eventListenersModule = (() => {

    const _addTaskButton = document.getElementById("addNewTask");
    const _cancelButton = document.getElementById("cancelButton");
    const _form = document.getElementById("form");

    const _addNewTask = () => {
        displayController.displayNewTaskForm();
    };

    const _closeNewTaskForm = (event) => {
        if (event.target == _form || event.target == _cancelButton) {
            displayController.closeNewTaskForm();
        }
    };

    const applyEventListeners = () => {
        document.addEventListener("click", (event) => console.log(event.target));
        _addTaskButton.addEventListener("click", _addNewTask);
        _cancelButton.addEventListener("click", _closeNewTaskForm);
        _form.addEventListener("click", _closeNewTaskForm);
    };

    return {
        applyEventListeners
    };
})();

export default eventListenersModule;