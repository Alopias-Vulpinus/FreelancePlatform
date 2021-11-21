const Task = require('../models/Task');
const Repository = require('./Repository')
const Status = require('../models/Status')

class TaskRepository extends Repository{
    async CreateTaskAsync(task){
        const taskToCreate = new Task({...task});
        const savedTask = await taskToCreate.save();
        return task;
    }

    async ChangeTaskAsync(task){
        const findQuery = {_id: task._id}
        const updateQuery = {$set:{...task}};
        const updatedTask = await Task.updateOne(findQuery,updateQuery);
        return updatedTask;
    }
    
    GetTasksAsync(){
        return Task.find({}).ToArray();
    }
}

const repository = new TaskRepository();

Object.freeze(repository);

module.exports = repository;
