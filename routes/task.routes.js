const express = require("express");
const taskRoutes = express.Router();
const controller = require("../controllers/task.controller");

taskRoutes.get("/", 
    controller.getAllTasks
) // api/v1/tasks/
taskRoutes.get("/:id", controller.getTasksById)// api/v1/tasks/:id
taskRoutes.post("/", controller.createTask)// api/v1/tasks/
taskRoutes.put("/:id", controller.updateTask) // api/v1/tasks/:id
taskRoutes.patch("/:id", controller.patchTask) // api/v1/tasks/:id
taskRoutes.delete("/:id", controller.deleteTask) // api/v1/tasks/:id

// console.log("===============================");
// console.log(typeof module.exports);
// console.log("===============================");

module.exports = taskRoutes;