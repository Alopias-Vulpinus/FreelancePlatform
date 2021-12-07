const User = require('../models/User');
const Repository = require('./Repository');
const Rating = require('../models/Rating');
const Customer = require('../models/Customer')
const Freelancer = require('../models/Freelancer');  
const Skill = require('../models/Skill');
const Role = require('../models/Role');

class ProfileRepository extends Repository{
    async ChangeProfileAsync(profileDto){
        const query = {id:profileDto.social_id};
        const updateQuery={ $set:{name: profileDto.name, surname: profileDto.surname, 
            email: profileDto.email}};
        try{
            await User.updateOne(query,updateQuery,this.HandleDatabaseQuery);
        }
        catch(e){
            throw e;
        }
    } 
    
    async GetUserAsync(id){
        try{
            const query = {_id: id};
            const profile = await User.findOne(query);
            return profile;
        }
        catch(e){
            throw e;
        }
    }

    async CheckIfUserExistsAsync(checkModel){
        const query = {social_id: checkModel.social_id, "role.name": checkModel.role_name };
        console.log(`try to find user with query: ${JSON.stringify(query)}`)
        const user = await User.findOne(query);
        console.log(`Fount user ${ JSON.stringify(user)}`);
        return isNaN(user);
    }

    async GetAllUserProfilesAsync(){
        const users = await User.find({});
        return users;
    }

    async RateUserAsync(ratingModel){
        const findQuery = {"_id": ratingModel.userTo};
        console.log(`RatingModel ${JSON.stringify(ratingModel)}`);
        const ratingToAdd = new Rating({
            user_from: ratingModel.userFrom,
            user_to: ratingModel.userTo,
            rating: ratingModel.rating
        });
        const pushQuery = {$push: {rates: ratingToAdd}};
        console.log(`Pushing rating ${JSON.stringify(pushQuery)}`);
        const user = User.findOneAndUpdate(findQuery, pushQuery,{new: true});
        return user;
    }

    async CheckIfRatingExists(ratingModel){
        const findQuery = {_id: ratingModel.userTo, rates:{$elemMatch:{user_from: ratingModel.userFrom}}};
        console.log(`Find Query: ${ JSON.stringify(findQuery)}`);
        const rating = await User.findOne(findQuery); 
        console.log(`Checking if rate exists : ${!(rating == null)}`);
        return !(rating == null);
    }

    async UpdateRatingAsync(ratingModel){
        const findQuery = {_id: ratingModel.userTo, rates: { $elemMatch:{user_from: ratingModel.userFrom}}};
        console.log(`Find query(Updating) ${ JSON.stringify(findQuery)}`);
        const updateQuery = {$set: {"rates.$.rating": ratingModel.rating }};
        const user = await  User.findOneAndUpdate(findQuery, updateQuery,  {new: true});
        return user;   
    }

    async GetUserByIdRole(id){
        const findQuery = {_id: id.id};
        console.log(`FindQuery: ${JSON.stringify(findQuery)}`);
        const freelancer = await Freelancer.findOne(findQuery);
        console.log(freelancer);
        if(freelancer == null){
            console.log(`Trying to find customer.....`);
            const customer =  await Customer.findById(id.id);
            console.log(`Found customer ${customer}`);
            return customer;
        }

        return freelancer;
    }
}

const repository = new ProfileRepository();

Object.freeze(repository);

module.exports = repository;
