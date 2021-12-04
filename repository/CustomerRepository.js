const Customer  = require('../models/Customer');
const Repository = require('./Repository');


class CustomerRepository extends Repository{
    async GetAllAccountsAsync(){
        const customers = await Customer.find({});
        return customers;
    }

    async UpdateCustomerAsync(customerModel){
        const query = {_id: customerModel._id};
        const updateQuery = {$set:{...customerModel}}
        const updatedResult = await Freelancer.updateOne(query, updateQuery, {...customerModel});
        console.log(`Customer update result ${updatedResult}`);
        return customerModel;
    }
}



const repository = new CustomerRepository();

Object.freeze(repository);

module.exports = repository;