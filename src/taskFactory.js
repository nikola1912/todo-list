const taskFactory = (title, id) => {

    let description = "";
    let dueDate = "";
    let priority = "";

    const prototype = {
        getTitle:       ()      => title,
        getID:          ()      => id,
        getDescription: ()      => description,
        getDueDate:     ()      => dueDate,
        getPriority:    ()      => priority,
        setTitle:       (newTitle)       => title       = newTitle,
        setID:          (newId)          => id          = newId,
        setDescription: (newDescription) => description = newDescription,
        setDueDate:     (newDueDate)     => dueDate     = newDueDate,
        setPriority:    (newPriority)    => priority    = newPriority
    };

    return Object.create(prototype);
};

export default taskFactory;