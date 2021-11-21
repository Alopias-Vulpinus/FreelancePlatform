const User = require('../models/User');
const Customer = require('../models/Customer');
const Freelancer = require('../models/Freelancer');
const Role = require('../models/Role');

class UserRepository{
    async CreateUserAsync(user,role){
        const userRole = await this.GetRoleAsync(role); 
        console.log(`Creating user with role ${role}`);
        const userToCreate = new User({social_id: user.socialId,
            family_name: user.lastName, 
            email:user.email,
            name: user.firstName,
            avatar_url: user.imageUrl,
            role: userRole});
        var createdUser = await userToCreate.save();
        return createdUser;
    }
    
    GetByIdAsync(socialId){
        const query = {social_id: socialId};
        return  User.findOne(query); 
    }

    async CreateFreelancerAsync(user,role){
        const createdUser = this.CreateUserAsync(user,role);
        const freelancerToCreate = new Freelancer({user_data: createdUser});
        const savedfreelancer = await freelancerToCreate.save(this.HandleResponce);
        return savedfreelancer;
    }

    async CreateCustomerAsync(user, role){
        const createdUser = await this.CreateUserAsync(user,role);
        console.log(`Creating customer with user ${JSON.stringify(createdUser)}`);
        var customerToCreate = new Customer({user_data: createdUser});
        const savedCustomer =  await customerToCreate.save(this.HandleResponce);
        return savedCustomer;
    }

    async GetRoleAsync(roleName){
        const query = {name: roleName};
        const role = await Role.findOne(query);
        return role;
    }

    GetUserByRoleAsync(socialId, role){
        const query = {social_id: socialId, "role.name": role};
        return User.findOne(query);
    }

    GetCustomerByIdAsync(socialId,role){
        const query = {"user_data.social_id": socialId};
        return Customer.findOne(query);
    }

    GetFreelancerByIdAsync(socialId,role){
        const query = {"user_data.social_id": socialId};
        return Freelancer.findOne(query);
    }
}

const repository = new UserRepository();

Object.freeze(repository);

module.exports = repository;