const Customer  = require('../models/Customer');
const Repository = require('./Repository');
const Role = require('../models/Role');
const Rating = require('../models/Rating')
class CustomerRepository extends Repository{
    async GetAllAccountsAsync(){
        const customers = await Customer.find({});
        return customers;
    }

    async UpdateCustomerAsync(customerModel){
        const query = {_id: customerModel._id};
        const user_data = customerModel.user_data
        const updateQuery = {$set: { 
            "user_data.name": user_data.name,
            "user_data.family_name": user_data.family_name,
            "user_data.image_url": user_data.image_url,
            "user_data.status": user_data.status,
            "user_data.contact_me": user_data.contact_me,
            "user_data.email": user_data.email
         } };
        console.log(`USER DATA: ${JSON.stringify(user_data)}`);
        console.log(`Find Query :${JSON.stringify(query)}, Update Query: ${JSON.stringify(updateQuery)}`);
        const updatedResult = await Customer.findOneAndUpdate(query, updateQuery,  {new: true}).populate('tasks');
        console.log(`Customer update result ${updatedResult}`);
        return updatedResult;
    }

    async GetRoleAsync(roleName){
        const query = {name: roleName};
        const role = await Role.findOne(query);
        return role;
    }

    AddTaskAsync(customerId, taskId){
        const query = {_id: customerId};
        const updateQuery = {$addToSet:{tasks: taskId}}
        return Customer.updateOne(query, updateQuery);
    }

    async DeleteTaskAsync(customerId, taskId){
        const findQuery = {_id: customerId};
        const deleteQuery = {$pull: {tasks: taskId}};
        console.log(`Delete task query ${JSON.stringify(deleteQuery)}`);
        await Customer.updateOne(findQuery, deleteQuery).populate('tasks');
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
        const user = Customer.findOneAndUpdate(findQuery, pushQuery,{new: true});
        return user;
    }

    async CheckIfRatingExists(ratingModel){
        const findQuery = {_id: ratingModel.userTo, "user_data.rates":{$elemMatch:{user_from: ratingModel.userFrom}}};
        console.log(`Find Query: ${ JSON.stringify(findQuery)}`);
        const rating = await Customer.findOne(findQuery); 
        console.log(`Checking if rate exists : ${!(rating == null)}`);
        return !(rating == null);
    }

    async UpdateRatingAsync(ratingModel){
        const findQuery = {_id: ratingModel.userTo, "user_data.rates": { $elemMatch:{user_from: ratingModel.userFrom}}};
        console.log(`Find query(Updating) ${ JSON.stringify(findQuery)}`);
        const updateQuery = {$set: {"user_data.rates.$.rating": ratingModel.rating }};
        const user = await  Customer.findOneAndUpdate(findQuery, updateQuery,  {new: true});
        return user;   
    }
}



const repository = new CustomerRepository();

Object.freeze(repository);

module.exports = repository;