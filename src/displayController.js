const displayControllerModule = (() => {
    
    const _newTaskForm      = document.getElementById("form");
    const _submitTaskButton = document.getElementById("submitButton");
    const _cancelTaskButton = document.getElementById("cancelButton");

    const _projectList      = document.getElementById("projectList");
    const _newProjectForm   = document.getElementById("projectForm");
    const _submitFormButton = document.getElementById("projectFormSubmitButton");
    const _cancelFormButton = document.getElementById("projectFormCancelButton");

    const _settingsMenu = document.getElementById("settingsMenu");
    
    const expandProjects = () => {
        const projectList = document.getElementById("projectList");
        projectList.classList.toggle("showProjects");
        projectList.classList.toggle("hideProjects");
    };
    
    const displayNewProjectForm = () => {
        _newProjectForm.style.display = "block";
    };

    const closeNewProjectForm = (event) => {
        if (event.target == _newProjectForm || event.target == _cancelFormButton || event.target == _submitFormButton) {
            _newProjectForm.reset();
            _newProjectForm.style.display = "none";
        }
    };

    const renderProjects = (projects) => {
        _projectList.innerHTML = "";
        
        projects.forEach(project => {
            const projectParent = document.createElement("div");
            projectParent.classList.add("project");
            projectParent.dataset.id = project.getID();

            const projectColor = document.createElement("div");
            projectColor.classList.add("projectColor");
            projectColor.style.backgroundColor = project.getColor();
            projectParent.append(projectColor, `${project.getTitle()}`);

            _projectList.append(projectParent);
        });
    };

    const highlightProject = (project) => {
        for (let project of _projectList.childNodes) {
            project.classList.remove("selected");
        }
        project.classList.add("selected");
    };

    const expandTask = (event) => {
        const taskDescriptionNode = event.target.closest(".task").getElementsByClassName("description")[0];
        taskDescriptionNode.classList.toggle("ON");
        taskDescriptionNode.classList.toggle("OFF");
    };

    const displayNewTaskForm = () => {
        _newTaskForm.style.display = "block";
    };

    const closeNewTaskForm = (event) => {
        if (event.target == _newTaskForm || event.target == _cancelTaskButton || event.target == _submitTaskButton) {
            _newTaskForm.reset();
            _newTaskForm.style.display = "none";
        }
    };

    const renderTasks = (project) => {
        const titleDiv = document.getElementById("title");
        const descriptionDiv = document.getElementById("description");
        titleDiv.innerHTML = `<h4>${project.getTitle()}</h4>`;
        descriptionDiv.innerHTML = `${project.getDescription()}`;

        const taskList = project.getTasks();
        const tasksListDiv = document.getElementById("tasksList");
        const taskTemplate = document.getElementById("taskTemplate");
        
        tasksListDiv.innerHTML = "";
        
        taskList.forEach((task) => {
            const newTask = taskTemplate.cloneNode(true);
            newTask.style.display = "grid";
            tasksListDiv.append(newTask);
            newTask.getElementsByClassName("title")[0].innerHTML = `<h4>${task.getTitle()}</h4>`;
            newTask.getElementsByClassName("description")[0].textContent = task.getDescription();
            newTask.getElementsByClassName("dueDate")[0].textContent = task.getDueDate();
            newTask.getElementsByClassName("priority")[0].textContent = task.getPriority();
            newTask.getElementsByClassName("expandTaskCheckbox")[0].addEventListener("click", expandTask);
            newTask.removeAttribute("id");

            const newTaskPriority = newTask.getElementsByClassName("priority")[0];
            switch(task.getPriority()) {
                case "High":
                    newTaskPriority.style.color = "#ff1a00";
                    break;
                case "Medium":
                    newTaskPriority.style.color = "#ffcc00";
                    break;
                case "Low":
                    newTaskPriority.style.color = "#02ad49";
                    break;
                case "None":
                    newTaskPriority.style.color = "#7a7b83";
                    break;
            }
        });
    };

    const _closeMenu = (event) => {
        if ((event.target.id !==  "settingsMenu") &&
            (event.target.id !==  "settingsButton")) 
                _settingsMenu.style.display = "none";
        document.removeEventListener("click", _closeMenu);
    }

    const showMenu = () => {
        let menuDisplay = _settingsMenu.style.display;
        _settingsMenu.style.display = (menuDisplay === "") || (menuDisplay === "none") ? "block" : "none";
        if (_settingsMenu.style.display === "block") {
            document.addEventListener("click", _closeMenu, true);
        } else {
            document.removeEventListener("click", _closeMenu);
        }
    };

    const applyEventListeners = () => {
        document.getElementById("settingsButton").addEventListener("click", showMenu);
    };

    return {
        expandProjects,
        displayNewProjectForm,
        closeNewProjectForm,
        renderProjects,
        highlightProject,
        expandTask,
        displayNewTaskForm,
        closeNewTaskForm,
        renderTasks,
        applyEventListeners
    };
})();

export default displayControllerModule;