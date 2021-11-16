const User = require('../models/User');
const Customer = require('../models/Customer');
const Freelancer = require('../models/Freelancer');

class UserRepository{
    CreateUserAsync(social_id,name,family_name,image_url){
        const userToCreate = new User({social_id = social_id,family_name = family_name, name = name,image_url = image_url});
        var createdUser = await userToCreate.save(this.HandleResponce)
        var freelancerToCreate = new Freelancer({user_data_id : createdUser._id});
        var customerToCreate = new Customer({user_data_id: createdUser._id});
        var createdCustomer = await freelancerToCreate.save(this.HandleResponce);
        var createdFreelancer  = await customerToCreate.save(this.HandleResponce);

        return {user: createdUser, freelancer: createdFreelancer, customer: createdCustomer};
    }

    CheckIfExists(social_id){
        
    }

    HandleResponce(err,result){
        if(err){
            console.log(`Error accured for user creation:${err}`);
            throw err;
        }
    }

}