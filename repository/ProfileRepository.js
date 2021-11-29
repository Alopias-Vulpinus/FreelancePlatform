const User = require('../models/User');
const Repository = require('./Repository');

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
}

const repository = new ProfileRepository();

Object.freeze(repository);

module.exports = repository;
