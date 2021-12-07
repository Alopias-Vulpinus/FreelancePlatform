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
        const query = {_id: customerModel._id};
        const skills = await this.GetSkillsByNameAsync(customerModel.skills);
        const updateQuery = {$set:{user_data: customerModel.user_data, skills: skills}};
        const updatedResult = await Freelancer.findOneAndUpdate(query, updateQuery, {new:true});
        console.log(`Customer update result ${updatedResult}`);
        return updatedResult;
    }

    async GetSkillsByNameAsync(skillNames){
        const findQuery = {name:{
            $in: skillNames
        }};
        const skillObjs = await Skill.find(findQuery);
        return skillObjs; 
    }

    async GetCustomerRoleAsync(){
        const customer = 'customer';
        const customerRole= await Role.findOne({name: customer});
        return customerRole;
    }
}



const repository = new FreelancerRepository();

Object.freeze(repository);

module.exports = repository;