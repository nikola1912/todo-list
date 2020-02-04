const displayControllerModule = (() => {

    const _form = document.getElementById("form");
    
    const displayNewTaskForm = () => {
        form.style.display = "block";
    };

    const closeNewTaskForm = () => {
        form.style.display = "none";
    };

    return {
        displayNewTaskForm,
        closeNewTaskForm
    };
})();

export default displayControllerModule;