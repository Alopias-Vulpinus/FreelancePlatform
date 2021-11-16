const User = require('../models/User');
const Customer = require('../models/Customer');
const Freelancer = require('../models/Freelancer');

class UserRepository{
    async CreateUserAsync(user_id,user_name,snd_name,image_url){
        const userToCreate = new User({social_id: user_id,
            family_name: snd_name, 
            name: user_name,avatar_url: image_url});
        var createdUser = await userToCreate.save();
        var freelancerToCreate = new Freelancer({user_data_id: createdUser._id});
        var customerToCreate = new Customer({user_data_id: createdUser._id});
        await freelancerToCreate.save(this.HandleResponce);
        await customerToCreate.save(this.HandleResponce);

        return createdUser;
    }

    CheckIfExists(social_id){
        
    }

}

const repository = new UserRepository();

Object.freeze(repository);

module.exports = repository;