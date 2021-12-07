const Task = require('../models/Task');
const Repository = require('./Repository')
const Status = require('../models/Status')
const CustomerRepository = require('./CustomerRepository')
class TaskRepository extends Repository{
    async CreateTaskAsync(task){
        task.status = await this.GetStatusByNameAsync(task.status);
        const taskToCreate = new Task({...task});
        console.log(`Task to create: ${taskToCreate}`);
        const savedTask = await (await taskToCreate.save()).populate('customer').populate('status').populate('performer').execPopulate();
        await CustomerRepository.AddTaskAsync(savedTask.customer._id, savedTask._id);
        return savedTask;
    }

    async ChangeTaskAsync(task){
        const findQuery = {_id: task._id}
        const updateQuery = {$set:{...task}};
        const updatedTask = await Task.updateOne(findQuery,updateQuery);
        return updatedTask;
    }
    
    GetTasksAsync(){
        return Task.find({})           
        .populate('customer')
        .populate('performer')
        .populate('candidates')
        .populate('status').ToArray();
    }

    async ChangeStatusForTaskAsync(changeStatusModel){
        const findQuery = {_id: changeStatusModel._id};
        const updateQuery = {$set: {status: changeStatusModel.status}};
        const updateResult = await Task.updateOne(findQuery,updateQuery)
        .populate('customer')
        .populate('performer')
        .populate('candidates')
        .populate('status');
        console.log(`Update Result ${updateResult}`);
        return updateResult;
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
            const pushQuery = {$push:{potential_performers: ''}}
        }
    }

    async AssignTaskTo(assignTaskModel){
        const findTaskQuery = {_id: assignTaskModel.taskId};
        const updateQuery = {$set: {is_assigned: true, freelancer_id: assignTaskModel.freelancer_id, potential_performers: []}}
        const updateResult = await Task.updateOne(findTaskQuery, updateQuery)
            .populate('customer')
            .populate('performer')
            .populate('candidates')
            .populate('status');
        return updateResult;
    }

    async UpdateStatsuAsync(updateTaskModel){
        const findQuery = {_id: updateTaskModel.task_id};
        const status = await  this.GetStatusByNameAsync(updateTaskModel.status);
        const updateQuery = {$set:{status: status._id}};
        console.log(`Update status query: ${JSON.stringify(findQuery)}`)
        const updatedTask = await Task.findOneAndUpdate(findQuery, updateQuery,{new: true})
            .populate('customer')
            .populate('performer')
            .populate('candidates')
            .populate('status');
            console.log(`Update status query: ${JSON.stringify(updatedTask)}`)
        return updatedTask;
    }

    async AddCandidateAsync(addCandidateModel){
        const findQuery = {_id: addCandidateModel.task_id};
        const updateQuery = {$addToSet: {candidates: addCandidateModel.candidate_id}};
        console.log(`FindQuery: ${JSON.stringify(findQuery)}`);
        console.log(`UpdateQuery: ${JSON.stringify(updateQuery)}`);
        const updatedTask = await Task.findOneAndUpdate(findQuery, updateQuery, {new: true})
            .populate('customer')
            .populate('performer')
            .populate('candidates')
            .populate('status');
        return updatedTask;
    }

    async RemoveCandidateAsync(removeCandidateModel){
        const findQuery = {_id: removeCandidateModel.task_id};
        const updateQuery = {$pull: {candidates: removeCandidateModel.candidate_id}};
        const updatedTask = await Task.findOneAndUpdate(findQuery, updateQuery,{new: true})
            .populate('customer')
            .populate('performer')
            .populate('candidates')
            .populate('status');
        return updatedTask;
    }

    async GetStatusByNameAsync(name){
        const query = {name: name};
        const status = await  Status.findOne(query);
        return status;
    }

    async GetAllTasksAsync(){
        const tasks = await Task.find({})
            .populate('customer')
            .populate('performer')
            .populate('candidates')
            .populate('status');
        return tasks;
    }

    async EditTaskAsync(task){
        const query = {_id: task}
    }

    async DeleteTaskAsync(task_id){
        const findQuery = {_id: task_id};
        const deletedTask = await Task.findOneAndDelete(findQuery)
        .populate('customer')
        .populate('performer')
        .populate('candidates')
        .populate('status'); 
        CustomerRepository.DeleteTaskAsync(deletedTask.customer,deletedTask._id);
    }

    async GetTaskById(taskId){
        const task = await Task.findById(taskId.id)
            .populate('customer')
            .populate('performer')
            .populate('candidates')
            .populate('status');
        return task;
    }
}

const repository = new TaskRepository();
 
Object.freeze(repository);

module.exports = repository;
