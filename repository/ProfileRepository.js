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
}

const repository = new ProfileRepository();

Object.freeze(repository);

module.exports = repository;
