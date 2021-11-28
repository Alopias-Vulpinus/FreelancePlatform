const Freelancer  = require('../models/Freelancer');
const Repository = require('./Repository');

class FreelancerRepository extends Repository{
    async GetTasksWithStatus(taksStatusModel){
        const query = {'user_data.social_id': taksStatusModel.social_id};
        const tasks = await Freelancer.findOne(query).assigned_tasks
            .where(x => x.status = taksStatusModel.status_name );
        return tasks;
    }
}