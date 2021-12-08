const Freelancer  = require('../models/Freelancer');
const Repository = require('./Repository');
const Rating = require('../models/Rating')
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
        const skills =freelancerModel.skills;
        const user_data = freelancerModel.user_data;
       // const updateQuery = {$set:{ const user_data = customerModel.user_data
        const updateQuery = {$set: { 
            "user_data.name": user_data.name,
            "user_data.family_name": user_data.family_name,
            "user_data.image_url": user_data.image_url,
            "user_data.status": user_data.status,
            "user_data.contact_me": user_data.contact_me,
            "user_data.email": user_data.email
         } , skills: skills};
        const updatedResult = await Freelancer.findOneAndUpdate(query, updateQuery, {new:true}).populate('tasks');

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

    async AddTaskAsync(freelancerId, taskId){
        const query = {_id: freelancerId};
        const updateQuery = {$addToSet:{tasks: taskId}}
        console.log("QUERY UPDATE:", updateQuery);
        const updateResult = await Freelancer.findOneAndUpdate(query, updateQuery,{new:true}).populate('tasks');
        console.log(updateResult);
    }

    async RateUserAsync(ratingModel){
        const findQuery = {"_id": ratingModel.userTo};
        console.log(`RatingModel ${JSON.stringify(ratingModel)}`);
        const ratingToAdd = new Rating({
            user_from: ratingModel.userFrom,
            user_to: ratingModel.userTo,
            rating: ratingModel.rating
        });
        const pushQuery = {$push: {"user_data.rates": ratingToAdd}};
        console.log(`Pushing rating ${JSON.stringify(pushQuery)}`);
        const user = Freelancer.findOneAndUpdate(findQuery, pushQuery,{new: true});
        return user;
    }

    async CheckIfRatingExists(ratingModel){
        const findQuery = {_id: ratingModel.userTo, "user_data.rates":{$elemMatch:{"user_from": ratingModel.userFrom}}};
        console.log(`Find Query: ${ JSON.stringify(findQuery)}`);
        const rating = await Freelancer.findOne(findQuery); 
        console.log(`Checking if rate exists : ${!(rating == null)}`);
        return !(rating == null);
    }

    async UpdateRatingAsync(ratingModel){
        const findQuery = {_id: ratingModel.userTo, "user_data.rates": { $elemMatch:{"user_data.rates.user_from": ratingModel.userFrom}}};
        console.log(`Find query(Updating) ${ JSON.stringify(findQuery)}`);
        const updateQuery = {$set: {"user_data.rates.$.rating": ratingModel.rating }};
        const user = await  Customer.findOneAndUpdate(findQuery, updateQuery,  {new: true});
        return user;   
    }
}

const repository = new FreelancerRepository();

Object.freeze(repository);

module.exports = repository;