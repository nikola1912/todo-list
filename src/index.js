import eventListeners from "./eventListeners.js";

const todoListFactory = (title) => {

    let description = "";

    const getTitle = () => title;

    const getDescription = () => description;

    const setDescription = () => {
        let newDescription = prompt("Enter description");
        description = newDescription;
    };

    return {
        getTitle,
        setDescription,
        getDescription
    }
};

/* const newList = todoListFactory("list #1");

console.log(newList.getDescription());
newList.setDescription();
console.log(newList.getDescription());
console.log(newList.getTitle()); */

/* const addTaskButton = document.getElementById("addNewTask");
document.getElementById("addNewTask").addEventListener("click", function() {
    const form = document.getElementById("form");
    form.style.display = "block";
}); */

eventListeners.applyEventListeners();
