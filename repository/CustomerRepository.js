const Customer  = require('../models/Customer');
const Repository = require('./Repository');
const Role = require('../models/Role');
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
        const updatedResult = await Customer.findOneAndUpdate(query, updateQuery,  {new: true});
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
}



const repository = new CustomerRepository();

Object.freeze(repository);

module.exports = repository;