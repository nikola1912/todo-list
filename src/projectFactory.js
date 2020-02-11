const projectFactory = (title, id) => {
    
    let description = "";
    let tasks = [];

    const prototype = {
        getTitle:       () => title,
        getID:          () => id,
        getDescription: () => description,
        getTasks:       () => tasks,
        setID:          (newId)          => id          = newId,
        setDescription: (newDescription) => description = newDescription,
        addTask:        (newTask)        => tasks.push(newTask)
    };

    return Object.create(prototype);
}; 

export default projectFactory;