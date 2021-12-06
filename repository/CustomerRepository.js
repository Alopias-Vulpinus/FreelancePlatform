const Customer  = require('../models/Customer');
const Repository = require('./Repository');


class CustomerRepository extends Repository{
    async GetAllAccountsAsync(){
        const customers = await Customer.find({});
        return customers;
    }

    async UpdateCustomerAsync(customerModel){
        const query = {_id: customerModel._id};
        delete customerModel.user_data.role;
        const user_data = customerModel.user_data
        const updateQuery = {$set: {$set: {user_data} } };
        console.log(`USER DATA: ${JSON.stringify(user_data)}`);
        console.log(`Find Query :${JSON.stringify(query)}, Update Query: ${JSON.stringify(updateQuery)}`);
        const updatedResult = await Customer.findOneAndUpdate(query, updateQuery, {new:true});
        console.log(`Customer update result ${updatedResult}`);
        return updatedResult;
    }
}



const repository = new CustomerRepository();

Object.freeze(repository);

module.exports = repository;