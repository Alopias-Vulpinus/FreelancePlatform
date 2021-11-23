const User = require('../models/User');
const Customer = require('../models/Customer');
const Freelancer = require('../models/Freelancer');
const Role = require('../models/Role');

class UserRepository{
    async CreateUserAsync(user_id,user_name,snd_name,image_url,role){
        const userRole = await this.GetRoleAsync(role); 
        console.log(`Creating user with role ${role}`);
        const userToCreate = new User({social_id: user_id,
            family_name: snd_name, 
            email:"add tih field in future",
            name: user_name,avatar_url: image_url,
            role: userRole});
        var createdUser = await userToCreate.save();
        return createdUser;
    }
    
    GetByIdAsync(socialId){
        const query = {social_id: socialId};
        return  User.findOne(query); 
    }

    async CreateFreelancerAsync(user_id,user_name,snd_name,image_url,role){
        const createdUser = this.CreateUserAsync(user_id,user_name,snd_name,image_url,role);
        const freelancerToCreate = new Freelancer({user_data_id: createdUser._id});
        const savedfreelancer = await freelancerToCreate.save(this.HandleResponce);
        return savedfreelancer;
    }

    async CreateCustomerAsync(user_id,user_name,snd_name,image_url,role){
        const createdUser = await this.CreateUserAsync(user_id,user_name,snd_name,image_url,role);
        console.log(`Creating customer with user ${JSON.stringify(createdUser)}`);
        var customerToCreate = new Customer({user_data_id: createdUser._id});
        const savedCustomer =  await customerToCreate.save(this.HandleResponce);
        return savedCustomer;
    }

    async GetRoleAsync(roleName){
        const query = {name: roleName};
        const role = await Role.findOne(query);
        return role;
    }
}

const repository = new UserRepository();

Object.freeze(repository);

module.exports = repository;