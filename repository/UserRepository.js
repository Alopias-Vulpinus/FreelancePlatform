const User = require('../models/User');
const Customer = require('../models/Customer');
const Freelancer = require('../models/Freelancer');
const Role = require('../models/Role');

class UserRepository{
    async CreateUserAsync(user,role){
        const userRole = await this.GetRoleAsync(role);
        console.log(`Quered user role ${userRole}`);
        const userToCreate = new User({social_id: user.socialId,
            family_name: user.sencondName, 
            email:user.email,
            name: user.firstName,
            image_url : user.imageUrl,
            role: userRole._id,
            contact_me: user.contact_me
        });

        return userToCreate;
    }
    
    GetByIdAsync(socialId){
        const query = {social_id: socialId};
        return  User.findOne(query); 
    }

    async CreateFreelancerAsync(user,role){
        const createdUser = await  this.CreateUserAsync(user,role);
        console.log(`UserCreated ${JSON.stringify(createdUser)}`);
        console.log(createdUser);
        const freelancerToCreate = new Freelancer({user_data: createdUser});
        const savedfreelancer = await (await freelancerToCreate.save(this.HandleResponce)).populate('user_data.role').execPopulate();
        return savedfreelancer;
    }

    async CreateCustomerAsync(user, role){
        const createdUser = await this.CreateUserAsync(user,role);
        console.log(`Creating customer with user ${JSON.stringify(createdUser)}`);
        var customerToCreate = new Customer({user_data: createdUser});
        const savedCustomer =  await (await customerToCreate.save(this.HandleResponce)).populate('user_data.role').execPopulate();
        return savedCustomer;
    }

    async GetRoleAsync(roleName){
        const query = {name: roleName};
        const role = await Role.findOne(query);
        return role;
    }

    async GetCustomerByIdAsync(socialId,role){
        const query = {"user_data.social_id": socialId};
        return Customer.findOne(query).populate('tasks').populate("user_data.role");
    }

    GetFreelancerByIdAsync(socialId,role){
        const query = {"user_data.social_id": socialId};
        return Freelancer.findOne(query).populate('tasks').populate("user_data.role");
    }
}

const repository = new UserRepository();

Object.freeze(repository);

module.exports = repository;