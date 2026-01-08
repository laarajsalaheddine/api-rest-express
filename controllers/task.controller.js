const Task = require("../models/task.model")

const getAllTasks = (request, response)=>{
    // tasks  = Task.find();
    const mockTasks = [
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: true },
        { id: 3, title: "Task 3", completed: false }
    ];
    tasks = mockTasks;
    /*
    config de la réponse: status, headers, body
            status()
    terminer la réponse: 
            end()
            send()
            json()
    */
    // response.end(tasks);
    // response.send(tasks);

    response.status(200).json(mockTasks);
}

module.exports = {
    getAllTasks
};