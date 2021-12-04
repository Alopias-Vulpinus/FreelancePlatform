const Task = require('../models/Task');
const Repository = require('./Repository')
const Status = require('../models/Status')

class TaskRepository extends Repository{
    async CreateTaskAsync(task){
        const taskToCreate = new Task({...task});
        const savedTask = await taskToCreate.save();
        return savedTask;
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

    async ChangeStatusForTaskAsync(changeStatusModel){
        const findQuery = {_id: changeStatusModel._id};
        const updateQuery = {$set: {status: changeStatusModel.status}};
        const updateResult = await Task.updateOne(findQuery,updateQuery);
        console.log(`Update Result ${updateResult}`);
    }

    async AddPotentialPerformerAsync(addPerformerModel){
        const taskQuery=  {_id: addPerformerModel._id};
        const task = await Task.findOne(taskQuery);
        const potentialPerformers = task.potential_performers;
        if(potentialPerformers.includes(addPerformerModel.freelancer_id)){
            return;
        }
        else{
            const findQuery = {_id: addPerformerModel._id};
            const pushQuery = {$push:{potential_performers: }}
        }
    }
}

const repository = new TaskRepository();

Object.freeze(repository);

module.exports = repository;
