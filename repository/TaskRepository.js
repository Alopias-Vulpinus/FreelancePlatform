const Task = require('../models/Task');
const Repository = require('./Repository')
const Status = require('../models/Status')
const CustomerRepository = require('./CustomerRepository')
const FreelancerRepository = require('./FreelancerRepository')
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
        FreelancerRepository.AddTaskAsync(assignTaskModel.freelancer_id, assignTaskModel.taskId);
        const status = await this.GetStatusByNameAsync("WORKING");
        const updateQuery = {$set: {status: status,is_assigned: true, performer: assignTaskModel.freelancer_id, candidates: []}};
        console.log("FIND QUERY", findTaskQuery);
        console.log("UPDATE QUERY:", updateQuery);
        const updateResult = await Task.findOneAndUpdate(findTaskQuery, updateQuery, {new:true})
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
        var status = await  Status.findOne(query);
        if(status == null){
            status = await this.SaveStatusAsync(name);
        }
        return status;
    }

    SaveStatusAsync(name){
        const satatusToSave = new Status({name: name});
        return satatusToSave.save();
    }

    async GetAllTasksAsync(state){
        console.log(state)
        const status = await this.GetStatusByNameAsync(state.status);
        console.log(status);
        const tasks = await Task.find({status: status._id})
            .populate('customer')
            .populate('performer')
            .populate('candidates')
            .populate('status');
        return tasks;
    }

    async EditTaskAsync(task){
        const findQuery = {_id: task.id};
        task.status = await this.GetStatusByNameAsync(task.status);
        const updateQuery = {$set:{...task}};
        console.log(`try to find task by id ${task.id}`);
        const updatedTask = await Task.findByIdAndUpdate(task.id, updateQuery,{new: true})
        .populate('customer')
        .populate('performer')
        .populate('candidates')
        .populate('status');
        return updatedTask;

    }

    async DeleteTaskAsync(task_id){
        const findQuery = {_id: task_id.id};
        const deletedTask = await Task.findOneAndDelete(findQuery)
        .populate('customer')
        .populate('performer')
        .populate('candidates')
        .populate('status'); 
        console.log(deletedTask);
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

    async GetFreelancerTasksAsync(id, status){
        const _status = await this.GetStatusByNameAsync(status);
        const findQuery = {performer: id, status: _status._id};
        const tasks = await Task.find(findQuery)
        .populate('customer')
        .populate('performer')
        .populate('candidates')
        .populate('status');
        return tasks;
    }

    async GetCustomerTasksAsync(id, status){
        const _status = await this.GetStatusByNameAsync(status);
        const findQuery = {customer: id, status: _status._id};
        const tasks = await Task.find(findQuery)
        .populate('customer')
        .populate('performer')
        .populate('candidates')
        .populate('status');
        return tasks;
    }
}

const repository = new TaskRepository();
 
Object.freeze(repository);

module.exports = repository;
