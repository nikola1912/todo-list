const projectFactory = (title, id, color) => {
    
    let description = "";
    let tasks = [];
    if (!color) color = "black"; 

    const prototype = {
        getTitle:       () => title,
        getID:          () => id,
        getDescription: () => description,
        getTasks:       () => tasks,
        getColor:       () => color,
        setID:          (newId)          => id          = newId,
        setDescription: (newDescription) => description = newDescription,
        setColor:       (newColor)       => color       = newColor,
        addTask:        (newTask)        => tasks.push(newTask)
    };

    return Object.create(prototype);
}; 

export default projectFactory;