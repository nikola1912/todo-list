import projectFactory from "./projectFactory.js";
import taskFactory from "./taskFactory";

const testObjects = (() => {

    let exampleProjects = [];
    let projectID = 0;

    const createExampleProject = (title, taskCount) => {
        const newProject = projectFactory(title, projectID);
        projectID++;
        for (let i = 0; i < taskCount; i++) {
            const taskTitle = `Example task title ${i}`;
            const newTask = taskFactory(taskTitle, i);
            const taskDescription = "Students compile a collection of their texts in a variety of genres over time and choose two pieces to present for summative assessment. In the majority of cases, the work in the student’s collection will arise from normal classwork, as the examples below illustrate.";
            const taskDueDate = "2020-02-11";
            const taskPriority = "High";

            newTask.setDescription(taskDescription);
            newTask.setDueDate(taskDueDate);
            newTask.setPriority(taskPriority);  

            newProject.addTask(newTask);
        }
        exampleProjects.push(newProject);
        return newProject;
    };

    const project1 = createExampleProject("Primer jedan", 6);
    project1.setDescription("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas fugit obcaecati, ipsa, dolorum maxime exercitationem consequuntur libero possimus iure, nemo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas fugit obcaecati, ipsa, dolorum maxime exercitationem consequuntur libero possimus iure, nemo.");
    const project2 = createExampleProject("Example two", 2);
    const project3 = createExampleProject("Primer tri", 1);
    const project4 = createExampleProject("Example four", 0);

    return {
        exampleProjects
    };
})();

export default testObjects;