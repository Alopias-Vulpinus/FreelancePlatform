const Freelancer  = require('../models/Freelancer');
const Repository = require('./Repository');

class FreelancerRepository extends Repository{
    async GetTasksWithStatus(taksStatusModel){
        const query = {'user_data.social_id': taksStatusModel.social_id};
        const tasks = await Freelancer.findOne(query).assigned_tasks
            .where(x => x.status = taksStatusModel.status_name );
        return tasks;
    }

    async GetAllAccountsAsync(){
        const freelancers =  await Freelancer.find({});
        return freelancers;
    }

    async UpdateFreelancerAsync(freelancerModel){
        const query = {_id: freelancerModel._id};
        const updateQuery = {$set:{...freelancerModel}}
        const updatedResult = await Freelancer.updateOne(query, updateQuery, {...freelancerModel});
        console.log(`Updated model ${JSON.stringify(updatedResult)}`);
        return freelancerModel;
    }
}



const repository = new FreelancerRepository();

Object.freeze(repository);

module.exports = repository;